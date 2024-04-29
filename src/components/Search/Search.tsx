import { FC, useState, ChangeEvent } from "react"

interface SearchProps {
    input?: string;
    placeholder?: string;
    onChangeInputData?(data: string): void; // Adicionando '?' torna a propriedade opcional
}

const Search: FC<SearchProps> = ({input, placeholder, onChangeInputData}) => {
    const [inputData, setInputData] = useState(input || '');

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputData(e.target.value);
        onChangeInputData ? onChangeInputData(e.target.value): null;
    }

    return (
        <>
            <input 
                type="text" 
                placeholder={placeholder}
                onChange={onInputChange}
                value={inputData}
                className="
                    focus:outline-none 
                    rounded-lg 
                    bg-gray-100
                    text-gray-500 
                    placeholder-gray-500 
                    my-4 mx-4 
                    py-1 ps-4
                    w-1/5
                    h-10
                "
            />
        </>
    )
}

export default Search;