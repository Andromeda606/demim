const btnTopRight = $("#btnTopRight");
const btnTopLeft = $("#btnTopLeft");
const btnBottomRight = $("#btnBottomRight");
const btnBottomLeft = $("#btnBottomLeft");

const imgSystem = $("#imgSystem");

const dateElement = $("#date");
const descElement = $("#desc");

btnTopLeft.hide();
btnBottomRight.hide();
btnBottomLeft.hide();
imgSystem.hide();

function changeTheme() {
    const body = $("body");
    body.css({
        "background": "white",
        "color": "black"
    });
    car.css("filter", "invert(0)");
    const buttons = $(".btn");
    buttons.css({
        "color": "black",
        "border": "1px black solid"
    });
    $("cross").css("background", "black");
}

function setDescAndDate(date, desc) {
    dateElement.html(date);
    descElement.html(desc);
}

// First
setDescAndDate("07.11.2003", "Hadi benimle tanışalım!");
btnTopRight.html("Benimle tanış");

let status = 0;
const buttonClick = (event) => {
    const element = $(event.target);
    console.log(element);
    runCar();
    $(element).hide(500, () => {
        if (status === 0) {
            setDescAndDate("11.08.2018", "Tanıştığımızda mum gibi aydınlandı yüreğim<br>hayat buldu hislerim.<br>Fakat bıraktın beni.");
            btnTopLeft.html("Bırakma onu!");
            btnTopLeft.show();
            imgSystem.show();
            status = 1;
        } else if (status === 1) {
            setDescAndDate("21.07.2021", "Bırakmadın..<br>Kanka dedin o an... İçimi yaktı gördüğüm");
            imgSystem.attr("src", "/img/img2.jpg");
            btnBottomLeft.html("Yanmasın, Çok aşığım ona!");
            btnBottomLeft.show();
            status = 2;
        } else if (status === 2) {
            setDescAndDate("23.07.2021", "İçimi ısıttı gördüğüm<br>Hislerim hayat buldu yıllar önceki gibi.");
            imgSystem.hide();
            changeTheme();
            btnBottomRight.html("Öp onu!");
            btnBottomRight.show();
            status = 3;
        } else if (status === 3) {
            setDescAndDate("<lnth>21.07.2022</lnth><br> ∞", "Çok aşığım sana, asla bırakma beni ilk günkü gibi..");
            $("#car").hide();
            $("cross").hide(1000);
            dateElement.css("font-size", "500%");
            descElement.css("font-size", "500%");
            status = 4;
            //btnBottomRight.html("Yanmasın, Çok aşığım ona!");
            // btnBottomRight.show();
        }
    });

};
btnTopRight.click(buttonClick);
btnTopLeft.click(buttonClick);
btnBottomRight.click(buttonClick);
btnBottomLeft.click(buttonClick);

