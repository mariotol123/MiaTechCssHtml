
function ItemList ({array}) {
    return (
        <>
                <ul>
                        {array.map((char, index) => (
                            <li key={index}>
                                {char}
                            </li>
                        ))}
                </ul>
        </>
    )
}

export default ItemList;