const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const r = urlParams.get('r')
const i_ = urlParams.get('i')

dat = data.imgs

i = parseInt(i_)

if (i !== null || i !== "null" || i !== "undefined" || i !== undefined) {
    if (dat > i || dat === i) {
        if (i !== 0) {
            if (i > 0) {
                console.log("yes")
                window.location.href = "./img/" + i + ".jpg";
            } else {
                console.log("no")
                window.location.href = "./404.jpg";
            }
        } else {
            console.log("no")
            window.location.href = "./404.jpg";
        }
    } else {
        console.log("no")
        window.location.href = "./404.jpg";
    }
}

if (r === "true" || r === true) {
    rn = Math.floor(Math.random() * dat + 1)
    window.location.href = "./img/" + rn + ".jpg";
}