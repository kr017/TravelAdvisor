import Ajmer_Sharif from "./img/Ajmer-Sharif-Dargah-rajasthani-tadka.jpg";
import Golden_Temple from "./img/Amritsar-India-Punjab.jpg";
import Basilica from "./img/goa.jpg";
import Kingdom_of_dreams from "./img/gurugram.jpg";
import Hawa_Mahal from "./img/Hawa-Mahal.jpg";
import Essel_World from "./img/lastamusement.jpg";
import Vaishno_Devi from "./img/mata-vaishno-devi1.jpg";
import Qutub_Minar from "./img/Qutub-Minar.jpg";
import Ramoji_Filmcity from "./img/ramoji.jpg";
import Red_Fort from "./img/Red-Fort.jpg";
import Sai_Shirdi from "./img/sai-baba.jpg";
import Shaniwar_wada from "./img/Shaniwar-Wada.jpg";
import Taj_Mahal from "./img/Taj-Mahal.jpg";
import Imagica from "./img/timthumb.jpeg";
import WonderLa from "./img/Wonderla-Amusement-Park-Bangalore.jpg";


export const travelList = {
  amusement: [
    {
      name: "Wonder La Water Park Banglore",
      category: ["amusement"],
      image: WonderLa,
    },
    {
      name: "Adlabs Imagica, Mumbai",
      category: ["amusement"],
      image: Imagica,
    },
    {
      name: "Kingdom of Dreams, Gurugram",
      category: ["amusement"],
      image: Kingdom_of_dreams,
    },
    {
      name: "Ramoji Film City, Telangana",
      category: ["amusement"],
      image: Ramoji_Filmcity,star:4
    },
    {
      name: "Essel World, Mumbai",
      category: ["amusement"],
      image: Essel_World,star:4
    }
  ],
  religious: [
    {
      name: "The Golden Temple, Amritsar, Punjab",
      category: ["religious"],
      image: Golden_Temple,
    },
    {
      name: "Vaishno Devi, Katra, Jammu and Kashmir",
      category: ["religious"],
      image: Vaishno_Devi,

    },
    {
      name: "Sai Baba Temple, Shirdi",
      category: ["religious"],
      image: Sai_Shirdi
    },
    {
      name: "Ajmer-e-Sharif, Ajmer, Rajasthan",
      category: ["religious"],
      image: Ajmer_Sharif
    },
    {
      name: "Basilica of Bom Jesus, Goa",
      category: ["religious"],
      image: Basilica
    }
  ],
  historic: [
    {
      name: "Hawa Mahal, Jaipur",
      category: ["historic"],
      image: Hawa_Mahal 

    },
    {
      name: "Red Fort, Delhi",
      category: ["historic"],
      image: Red_Fort
    },
    {
      name: "Taj Mahal, Agra",
      category: ["historic"],
      image: Taj_Mahal
    },
    {
      name: "Shaniwar wada, Pune",
      category: ["historic"],
      image: Shaniwar_wada
    },
    {
      name: "Qutb Minar, Delhi",
      category: ["historic"],
      image: Qutub_Minar
    }
  ]
};
