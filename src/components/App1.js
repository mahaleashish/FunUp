//import logo from './logo.svg';
import './App1.css';
import ProfileCard from './Card1';


function App1() {

    const userOne = {
        image: 'https://i.pinimg.com/originals/53/1e/3f/531e3f62c0e3ca41a4d04ce2b23f1371.jpg',
        name: 'Ashish Mahale',
        designataion: 'UI/UX DESIGNER',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, ... Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }

    const userTwo = {
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/150B8/production/_110000268_fe81a048b.jpg',
        name: 'Sundar Pichai',
        designataion: 'CEO GOOGLE',
        description: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madurai, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering.'
    }

    const userThree = {
        image: 'https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/thumbnail_elon-musk-twitter-.jpg',
        name: 'Elon Musk',
        designataion: 'CEO SPACEX',
        description: 'Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation.'
    }

    function AlerUserOne() {
        alert('Hi I am ' + userOne.name)
    }
}
export default App1;