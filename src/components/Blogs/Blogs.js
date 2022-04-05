import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='border m-16 p-8'>
            <div className='text-justify mb-4'>
                <h2 className='font-bold'><span >Question-01:</span> What is Context API?</h2>
                <h2><span className='font-bold'>Answer:</span> Context API  allows a component to share state across the entire app smothly and with ease. It is a new feature in React. This feature added in version 16.3 of React. Data also can be passed through the higher level components to the lower level components. It is called prop drilling. For deep nested components sometimes it becomes cumbersome to pass data to the lowest level. In that case, Context API comes handy by creating a global scoped access to data.</h2>
            </div>

            <div className='text-justify my-4'>
                <h2 className='font-bold'><span >Question-02:</span> What is Semantic Tag?</h2>
                <h2><span className='font-bold'>Answer:</span> There are lots of tags in HTML. Among them, some tags are like, they describe their purpose. These tags are called Sementic Tag. for Example: &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;aside&gt; etc. Sementic Tags are introduced in HTML5. It also help search engines to read the page and find the required information faster.</h2>
            </div >

            <div className='text-justify mt-4'>
                <h2 className='font-bold'><span >Question-03:</span> What is the difference between 'inline' element and 'block' element?</h2>
                <h2><span className='font-bold'>Answer: </span>Every html element has either block or inline display type as default value. There are some difference between Block Element and Inline Element:</h2>
                <table class="border m-4 p-4">
                    <thead>
                        <tr class="text-center">
                            <th>Block Element</th>
                            <th>Inline Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className='m-8 p-4'>A block element always starts on a new line</td>
                            <td className='m-8 p-4'>An inline element plases side by side one after another.</td>
                        </tr>
                        <tr>
                            <td className='m-8 p-4'>A block element always takes up the full width available.
                            </td>
                            <td className='m-8 p-4'>An inline element takes only the necessary spaces required.</td>
                        </tr>
                        <tr >
                            <td className='m-8 p-4'>block elements have definite height and width property.</td>
                            <td className='m-8 p-4'>An inline element does not have height width property to set of get.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Blogs;