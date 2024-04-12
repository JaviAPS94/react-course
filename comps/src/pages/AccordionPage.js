import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'asd123',
            label: 'Can I use React on a project?',
            content: 'Yes, you can use React in your project. React is a library for building user interfaces. It is maintained by Facebook. It is widely used and well supported. It is also easy to learn.'
        },
        {
            id: 'asd124',
            label: 'What is React?',
            content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook. It is widely used and well supported. It is also easy to learn. React allows developers to build web applications that can change data without reloading the page. It is fast and efficient. It is also easy to learn.'
        },
        {
            id: 'asd125',
            label: 'How do I install React?',
            content: 'You can install React using npm. Run npm install react react-dom. You can also use a CDN. Add the following script tags to your HTML file: <script src="https://unpkg.com/react@16/umd/react.development.js"></script> <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>'
        }
    ]

    return  <Accordion items={items}/>;
}

export default AccordionPage;