import React from "react";

function useLocalStorage(itemName, initialValue) {
    const LocalStorageItem = localStorage.getItem(itemName);
    let ParsedItem;

    if(LocalStorageItem) {
        ParsedItem = JSON.parse(LocalStorageItem);
    }
    else {
        ParsedItem = initialValue;
    }

    const [Item, SetItem] = React.useState(ParsedItem);

    const SaveItem = (ValueItem) => {
        localStorage.setItem(itemName, JSON.stringify(ValueItem));
        SetItem(ValueItem);
    }

    return [Item, SaveItem];
}


function useLANStorage(ItemName, InitialValue) {
    const [item,setItem] = React.useState(InitialValue);
    const [loading, setLoading] = React.useState(true);
    const [error] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            let LocalStorageItem = localStorage.getItem(ItemName);
            let ParsedItem;
    
            if(LocalStorageItem) {
                ParsedItem = JSON.parse(LocalStorageItem);
            }
            else {
                ParsedItem = InitialValue;
            }
    
            setLoading(false);
            setItem(ParsedItem);
            console.log(ParsedItem);
        }, 1000)
    });

    const saveItem = (valueItem) => {
        localStorage.setItem(ItemName, JSON.stringify(valueItem));
        setItem(valueItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage, useLANStorage };