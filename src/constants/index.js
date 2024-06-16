import { image1,image2,image3,small1,small2,small3,article,education, meetup,map,date,work,job } from '../images'


const pages = [
    {
        id:1,
        image: image1,
        text: "What if famous brands have regular fonts? Meet RegulaBrands!",
        icon: small1,
        name: "Sarthak Kamra",
        con: article,
        views:"1.4k views"
    },
    {
        id:2,
        image: image2,
        text: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        icon: small2,
        name: "Sarah West",
        con: education,
        views:"4.8k views"
    },
    {
        id:3,
        image: image3,
        text: "Finance & Investment Elite Social Mixer@Lujiazui",
        icon: small3,
        name: "Ronal Jones",
        con: meetup,
        views:"800 views",
        work1:"Fri,12 Oct,2018",
        work2:"Fri,12 Oct,2018",
        location:"Ahmedabad,India",
        symbol1:date,
        symbol2:map,
        link:"Visit Website"
    },
    {
        id:4,
        text: "Software Developer-II",
        icon: small3,
        name: "Ronal Jones",
        con: job,
        views:"1.7k views",
        work1:"Innovacer Analytic...",
        work2:"Innovacer Analytics Private Ltd.",
        location:"Noida,India",
        symbol1:work,
        symbol2:map,
        link:"Apply on Timesjobs"
    }
]

export { pages };