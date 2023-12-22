// BlogPostsSection.js

import React from 'react';
import Card from './Card'; // Adjust the path based on your project structure

const BlogPostsSection = () => {
    // Sample card data, you can replace it with your actual data
    const sportsCardData = [
        // Sample card data for sports category
        {
            id: 1,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Sports Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/sports-card1'
        },
        {
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
        // Add more card data as needed
    ];

    const technologyCardData = [
        // Sample card data for technology category
        {
            id: 1,
            image: 'https://i.pinimg.com/736x/2c/d8/a7/2cd8a74b799243e32d4ee504771a82d0.jpg',
            title: 'Technology Card Title 1',
            description: 'Lorem libero donec Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
            linkText: 'https://example.com/technology-card1'
        },
        {
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
        // Add more card data as needed
    ];

    return (
        <section style={{ backgroundColor: '#f7fafd' }}>
            <div className="container mt-4 py-5">
                <div className="section-header">
                    <h2>Recent Blog Posts</h2>
                    <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <h2 className="text-capitalize border-bottom border-3 pb-2 fs-1 text-opacity-75 mb-4 border-primary border-opacity-75">
                            Sports
                        </h2>
                        <div className="row row-cols-2 row-cols-md-2 g-4">
                            {sportsCardData.map((card) => (
                                <div key={card.id} className="col">
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-capitalize border-bottom border-3 pb-2 fs-1 text-opacity-75 mb-4 border-primary border-opacity-75">
                            Technology
                        </h2>
                        <div className="row row-cols-2 row-cols-md-2 g-4">
                            {technologyCardData.map((card) => (
                                <div key={card.id} className="col">
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostsSection;