import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
    let navigate = useNavigate();

    let arr = [
        {
            id: 1,
            title: "| HTML&CSS | ВЕБ ИШТЕП ЧЫГУУ ДЕГЕН ЭМНЕ? ҮСТҮРТӨН КЫЛЫНГАН ТҮШҮНДҮРМӨ",
            video: "https://www.youtube.com/embed/M7yJma7BGQg?si=8VBQ9nqd3XZThn0n",
            desc: "Бул видеодо веб иштеп чыгуу жонундо кыргызча устуртон соз кылабыз. Башкача айтканда вебтин негизги тилдери болгон HTML, CSS жана JavaScript жонундо маалымат алып, сервер деген эмне, динамикалык веб-сайт деген эмне, статикалык веб-сайт деген эмне деген суроолорго жооп издейбиз. Андан сырткары фронтенд жана бекенд иштеп чыгуучулар кандай жумуштарды кылат, кайсы программалоо технологиялары/тилдери менен иштейт, ошнун баарын карап отмокчубуз.",
        },
        {
            id: 2,
            title: "| HTML&CSS | КОД РЕДАКТОРУ ДЕГЕН ЭМНЕ?🤔",
            video: "https://www.youtube.com/embed/Ia9aoytSrvY?si=V3X8kcokAyvarUDG",
            desc: "Достор бул видеодо код редактору менен устуртон таанышабыз. Андан сырткары программаны жазуудагы, башкача айтканда, веб иштеп чыгуудагы процесстерди карап отобуз.",
        },
        {
            id: 3,
            video: "https://www.youtube.com/embed/faRg7UZSDqQ?si=DVlFZLUPds3gnwCK",
            title: "| HTML&CSS |VS CODE КОД РЕДАКТОРУН ОРНОТУУ🧐",
            desc: "",
        },
        {
            id: 4,
            title: "| HTML&CSS | СИЗДИН ЭҢ БИРИНЧИ HTML ВЕБ-БАРАКЧАҢЫЗ🔥",
            video: "https://www.youtube.com/embed/6SE63BIRIes?si=KOFqzxlq9TBomhcz",
            desc: " ",
        },
        {
            id: 5,
            video: "https://www.youtube.com/embed/vRiqssSooHg?si=IypTG_jEYQcKiMXW",
            title: "| HTML&CSS | HTML CSS КУРСУНУН МАТЕРИАЛДАРЫН КОЧУРОБУЗ 😃",
            desc: "",
        },
        {
            id: 6,
            video: "https://www.youtube.com/embed/t49Rfrbwh9s?si=5Xf79h1ZULIyiwcI",
            title: "| HTML&CSS | HTML НЕГИЗДЕРИ, КИРИШ СӨЗ😀",
            desc: "",
        },
    ];

    useEffect(() => {
        if (localStorage.getItem("auth") === "true") {
            console.log("hello");
        } else {
            navigate("/");
        }
    }, []);

    return (
        <div className="">
            {arr.map((item) => (
                <div key={item.id}>
                    <div className="less_card content">
                        <h2 className="card_id">{item.id} САБАК</h2>
                        <h3 className="card_title">{item.title}</h3>
                        <iframe
                            className="card_iframe"
                            src={item.video}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                        <p className="card_desc">{item.desc}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Main;
