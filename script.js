
document.querySelectorAll("div img").forEach((element)=>{
    element.onmousedown = (el) => {
        document.body.append(element);
        element.style.position = "absolute";
        element.ondragstart = () => false;

        moveItem(el);
        function moveItem(e) {
        element.style.top = e.pageY - element.height / 2 + "px";
        element.style.left = e.pageX - element.width / 2 + "px";
    }

    document.onmousemove = (e) => moveItem(e);
    element.onmouseup = () => (document.onmousemove = "");
    };
});