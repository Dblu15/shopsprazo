"use client";
import Link from "next/link";

export default function CategoryPopup() {
    const categories = {
        Vegetables: [
            { name: "Tomato", discount: "30%" },
            { name: "Onion", discount: "20%" },
            { name: "Broccoli", discount: "25%" },
            { name: "Radicchio", discount: "10%" },
            { name: "asparagus", discount: "05%" },
            { name: "red chilli", discount: "20%" },
        ],
        Bakery: [
            { name: "donut", discount: "10%" },
            { name: "Waffles", discount: "30%" },
            { name: "Bread", discount: "15%" },
            { name: "Cup cake", discount: "25%" },
            { name: "Croissant", discount: "20%" },
            { name: "biscuits", discount: "35%" },
        ],
        Fruits: [
            { name: "Apple", discount: "10%" },
            { name: "Mango", discount: "30%" },
            { name: "Pineapple", discount: "15%" },
            { name: "Orange", discount: "25%" },
            { name: "Cherry", discount: "20%" },
            { name: "Grapes", discount: "35%" },
        ],
        Fashion: [
            { name: "T-shirt", discount: "25%" },
            { name: "Dress", discount: "15%" },
            { name: "jeans", discount: "15%" },
            { name: "Suit", discount: "45%" },
            { name: "Coat", discount: "24%" },
            { name: "Shoes", discount: "11%" },
        ],
    };

    return (
        <>
            <div className="sp-category-popup-overlay sticky-header-next-sec" data-cursor="hide"></div>
            <div className="sp-category-popup">
                <a href="#!" className="sp-category-close">
                    <i className="ri-close-large-line"></i>
                </a>
                <div className="sp-category-search">
                    <h4>Also you can search more Categories!</h4>
                    <form>
                        <input type="text" className="sp-category-popup-search" placeholder="Search here..." />
                        <button type="submit"><i className="ri-search-line"></i></button>
                    </form>
                    <div className="sp-cat-list">
                        {Object.entries(categories).map(([title, items]) => (
                            <ul key={title}>
                                <li className="title">{title}</li>
                                {items.map((item) => (
                                    <li className="list" key={item.name}>
                                        <Link href="/shop">
                                            {item.name} <span>- {item.discount}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
