setInterval(() => {
    mode = (mode + 1) % 3;
    grid.classList.remove("zoom1","zoom2","zoom3");
    grid.classList.add("zoom" + (mode+1));
}, 400);
