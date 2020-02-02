const handleSelect = item => {
    const exists = selectedItems.map(i => i).filter(x => x.id === item.id);
    if (exists[0]) {
        let diferent = selectedItems.map(i => i).filter(x => x.id !== item.id);
        if (!diferent.length) {
            setSelect([]);
        } else {
            diferent[0].label = "1";
            diferent[0].color = "blue";
            setSelect(diferent);
        }
    } else if (selectedItems.length == 2) {
        alert("opsss");
    } else {
        item.color = selectedItems.length == 0 ? "blue" : "red";
        item.label = selectedItems.length == 0 ? "1" : "2";
        item.active = true;
        setSelect([...selectedItems, item]);
    }
};

setSelected = item => {
    let res = selectedItems.filter(x => x.id === item.id);
    return res[0];
};
