//import images from image folder
import ResLogo from '../../images/ResLogo.jpeg';
import AfricanRestaurant from '../../images/AfricanRestaurant.jpeg'
import VegetarianRestaurant from '../../images/VegetarianRestaurant.jpeg'

//Information for the Amico Chef Restaurant
export const RestaurantData1 = [
    {
        img: ResLogo,
        alt: 'ResLogo',
        name: 'The Amico Chef Restaurant',
        desc:
        'The friendliest Italian Restaurant in Albany',
        button:  'Order here', 
        linkTo:"/DisplayMenu"
    }
];

//Information for the African Restaurant
export const RestaurantData2 = [
    {
        img: AfricanRestaurant,
        alt: 'AfricanRestaurant',
        name: 'A Touch of Africa',
        desc:
        'Try some of the staple dishes from all over Africa',
        button: 'Order here'
    }
];

//Information for the Vegetarian Restaurant
export const RestaurantData3 = [
    {
        img: VegetarianRestaurant,
        alt: 'VegetarianRestaurant',
        name: 'A Better Taste',
        desc:
        'Feel good about every bite knowing that it is 100% vegetarian',
        button: 'Order here'
    }
];
