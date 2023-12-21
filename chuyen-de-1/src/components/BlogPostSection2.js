// BlogPostsSection2.js

import React from 'react';
import Card from './Card'; // Adjust the path based on your project structure

const BlogPostsSection2 = () => {
    // Sample card data, you can replace it with your actual data
    const cardData = [
        // Sample card data
        {
            id: 1,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/card1'
        }, {
            id: 2,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/card1'
        }, {
            id: 5,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        {
            id: 6,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        {
            id: 7,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/card1'
        }, {
            id: 8,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        {
            id: 9,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        // Add more card data as needed
    ];

    // Sample "Read More" links data
    const readMoreLinks = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias quibusdam magnam laboriosam earum molestiae quia ut cumque possimus',
        // Add more read more links as needed
    ];

    return (
        <section>
            <div className="container mt-4 py-5">
                <div className="section-header">
                    <h2>Recent Blog Posts</h2>
                    <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-md-3 g-4">
                            {cardData.map((card) => (
                                <div key={card.id} className="col">
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-capitalize border-bottom border-3 pb-2 fs-1 text-opacity-75 mb-4 border-primary border-opacity-75">
                            read more
                        </h2>
                        <div className="row row-cols-md-1 container g-3">
                            {readMoreLinks.map((link, index) => (
                                <a key={index} className="long-2 link-dark link-offset-2 link-underline-opacity-50 fs-5 link-underline-opacity-100-hover w-100" href="#">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostsSection2;
