import {useState} from "react";


const Dashboard = () => {
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const [typedLetter, setTypedLetter] = useState("");
    const [activeLetterIndex, setActiveLetterIndex] = useState(0);

    const handleTyping = (e) => {
        if (typedLetter === ' ' && activeLetterIndex === 0) {
            setTypedLetter('')
            return;
        }
        const words = document.getElementById('words').children;
        const activeWord = words[activeWordIndex];
        // console.log(activeWord)
        const letters = activeWord.children;
        const activeLetter = letters[activeLetterIndex];

        console.log(activeLetterIndex)

        if (activeLetterIndex >= textArray[activeWordIndex].length && activeLetterIndex < 23) {
            activeWord.innerHTML += `<span id="letter" class="text-red-500">${typedLetter}</span>`
            setActiveLetterIndex(prevState => prevState + 1)
            return;
        }

        if (activeLetter.innerText === typedLetter) {
            activeLetter.classList.add('text-green-500')
        }
        else {
            activeLetter.classList.add('text-red-500')
        }

        setActiveLetterIndex(prevState => prevState + 1)

        // setActiveLetterIndex(prevState => prevState + 1)
    }

    const handleWord = (event) => {
        // /^[a-zA-Z]$/ - regex for letters
        // /^[a-zA-Z\s]$/ - regex for letters and spaces

        if (event.key === ' ' && activeLetterIndex === textArray[activeWordIndex].length) {
            setActiveWordIndex(prevState => prevState + 1)
            setActiveLetterIndex(0)
        }

        if (/^[a-zA-Z\s.,!?'"()\-]+$/.test(event.key)) {
            setTypedLetter(event.key)
            // Do something with the typed character
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-800 text-gray-500 overflow-hidden">
            <div className="w-[80%]">
                <input onKeyDown={handleWord} onInput={handleTyping} type="text" autoFocus className="focus:outline-0 w-full focus:cursor-text bg-transparent"/>
                <div className="text-2xl bg-green-300 block"></div>
                <div id="words" className="relative max-w-full flex text-2xl gap-x-3 flex-wrap">
                    {textArray.map((word, _) => (
                        <div key={_} id="word">
                            {word.split('').map((letter, _) => <span key={_} id="letter">{letter}</span>)}
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

const text = 'Students eagerly engage in diverse subjects, fostering knowledge and friendships, as teachers inspire a love for learning in school environments.'
const textArray = text.split(' ');

export default Dashboard;