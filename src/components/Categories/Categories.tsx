import { FC, useState, ChangeEvent, useCallback, useEffect } from "react";

interface CategoryProps {
    id: string;
    value: string;
    color: string;
    editable: boolean;
    onDelete: () => void;
}

const Category: FC<CategoryProps> = ({ id, value, color, editable = false, onDelete }) => (
    <div id={id} className="px-2 m-1 py-1 rounded-md flex items-center" style={{ backgroundColor: color }}>
        <span className="text-xs" style={{ backgroundColor: color }}>{value}</span>
        {editable && <button data-testid={`delete-button-${id}`} className="ms-4" onClick={onDelete}>x</button>}
    </div>
);

interface CategoriesProps {
    tags: Tag[];
    editable?: boolean;
    onUpdateCategories?(tags: Tag[]): void;
}

interface Tag {
    id: string;
    value: string;
    color: string;
}

const Categories: FC<CategoriesProps> = ({ tags, editable = false, onUpdateCategories }) => {
    const [categorieTags, setCategorieTags] = useState<Tag[]>(tags);
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const tagColors = ['#FCEBAF', '#FFBDBD', '#C2DBFF', '#CBF4CB', '#DDCBF4', '#F4CBE4', '#ABEDDD', '#FFD583']

    useEffect(() => {
        setCategorieTags(tags);
    }, [tags]);

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const createNewTag = useCallback(() => {
        // Limits tag creating for maximum 10 tags
        // Needs to implement error message
        if (categorieTags.length >= 10) {
            return null;
        }
        if (inputValue.trim() !== "") {
            const newTag: Tag = {
                id: Date.now().toString(),
                value: inputValue.toLowerCase(),
                color: tagColors[Math.floor(Math.random() * tagColors.length)] // This value will came from the backend further in the development
            };
            return newTag;
        }
        return null;
    }, [inputValue, tagColors]);

    const handleDeleteTag = useCallback((tagId: string) => {
        const updatedTags = categorieTags.filter((tag) => tag.id !== tagId);
        onUpdateCategories && onUpdateCategories(updatedTags);
    }, [categorieTags, onUpdateCategories]);

    const handleInputBlur = useCallback(() => {
        setEditMode(false);
        const newTag = createNewTag();
        if (newTag) {
            const updatedTags = [newTag, ...categorieTags];
            onUpdateCategories && onUpdateCategories(updatedTags);
            setInputValue("");
        }
    }, [categorieTags, createNewTag, onUpdateCategories]);

    return (
        <div className="my-4 flex flex-row flex-wrap">
            {editable && (
                editMode ? (
                    <input
                        className="h-auto rounded-md bg-gray-100 focus:outline-none ps-4 w-32 my-1"
                        type="text"
                        value={inputValue}
                        autoFocus
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyUp={(e) => e.key === "Enter" && handleInputBlur()}
                    />
                ) : (
                    <button
                        className="px-4 py-1 my-1 mx-2 rounded-md bg-gray-100 text-gray-500"
                        onClick={() => setEditMode(true)}
                    >
                        +
                    </button>
                )
            )}
            {categorieTags.map((tag) => (
                <Category
                    key={tag.id}
                    id={tag.id}
                    editable={editable}
                    value={tag.value}
                    color={tag.color}
                    onDelete={() => handleDeleteTag(tag.id)}
                />
            ))}
        </div>
    );
};

export default Categories;
