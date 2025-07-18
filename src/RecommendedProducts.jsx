import Product from './Product';

export default function RecommendedProducts({ selectedCategory, showTitle = true }) {
  const products = [
    {
      id: 1,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/BEIS-WA116_V2.jpg',
      name: 'Cosmetics Case',
      seller: 'Molly Wu',
      price: '19.99',
      category: 'beauty',
    },
    {
      id: 2,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/EIAA-WA38_V2.jpg',
      name: 'Whirlpool Sunglasses',
      seller: 'Wendy Huo',
      price: '29.99',
      category: 'fashion',
    },
    {
      id: 3,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/SNIX-WA144_V3.jpg',
      name: 'Sonix AirPod Pro Case',
      seller: 'Adeline Chan',
      price: '39.99',
      category: 'others',
    },
    {
      id: 4,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/SWER-WA70_V2.jpg',
      name: 'Swell Mug',
      seller: 'Emma Hong',
      price: '79.99',
      category: 'lifestyle',
    },
    {
      id: 5,
      image: 'https://is4.revolveassets.com/images/p4/n/z/BSUR-WH62_V1.jpg',
      name: 'Circular Pillow',
      seller: 'Ava Lee',
      price: '59.99',
      category: 'lifestyle',
    },
    {
      id: 6,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/HMAY-WA22_V2.jpg',
      name: 'MacBook Air 14 Pro Case',
      seller: 'Amy Song',
      price: '19.99',
      category: 'others',
    },
    {
      id: 7,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/LACK-WA180_V2.jpg',
      name: 'Reef Bucket Hat',
      seller: 'Annecy Hui',
      price: '39.99',
      category: 'fashion',
    },
    {
      id: 8,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/APRS-WA71_V2.jpg',
      name: 'Lumi Mink Gloves',
      seller: 'Avery Liu',
      price: '89.99',
      category: 'fashion',
    },
    {
      id: 9,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/ADIO-MZ15W_V2.jpg',
      name: 'Adidas Samba Shoes',
      seller: 'Amy Liu',
      price: '59.99',
      category: 'fashion',
    },
    {
      id: 10,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/SAME-WZ1100_V2.jpg',
      name: 'Waylon Sandal',
      seller: 'Annie Wong',
      price: '84.99',
      category: 'fashion',
    },
    {
      id: 11,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/MALG-WH2_V1.jpg',
      name: 'Bergamot Scented Candle',
      seller: 'Kiara Serett',
      price: '24.99',
      category: 'lifestyle',
    },
    {
      id: 12,
      image: 'https://is4.revolveassets.com/images/p4/n/z/BDOR-GQ9_V1.jpg',
      name: 'Clio Skirt',
      seller: 'Angel Tseng',
      price: '56.99',
      category: 'fashion',
    },
    {
      id: 13,
      image: 'https://is4.revolveassets.com/images/p4/n/z/PCHI-GD14_V1.jpg',
      name: 'Floral Top',
      seller: 'Gina Lee',
      price: '16.99',
      category: 'fashion',
    },
    {
      id: 14,
      image: 'https://is4.revolveassets.com/images/p4/n/z/BCOS-WU466_V1.jpg',
      name: 'Hoola Toasted Bronzer',
      seller: 'Mia Hu',
      price: '21.99',
      category: 'beauty',
    },
    {
      id: 15,
      image: 'https://is4.revolveassets.com/images/p4/n/z/VISE-WU5_V1.jpg',
      name: 'Eyeshadow Palette',
      seller: 'Kate Park',
      price: '26.99',
      category: 'beauty',
    },
    {
      id: 16,
      image: 'https://is4.revolveassets.com/images/p4/n/z/BSUR-WH52_V1.jpg',
      name: 'Reclining Pillow Lounger',
      seller: 'Dylan Chen',
      price: '36.99',
      category: 'furniture',
    },
    {
      id: 17,
      image: 'https://is4.revolveassets.com/images/p4/n/z/ICHA-WA1_V2.jpg',
      name: 'Five Minute Journal',
      seller: 'Kay Khine',
      price: '13.99',
      category: 'stationary',
    },
    {
      id: 18,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/DLLR-WH24_V2.jpg',
      name: 'Aces Notecards',
      seller: 'Jenna Kim',
      price: '8.99',
      category: 'stationary',
    },
    {
      id: 19,
      image: 'https://is4.revolveassets.com/images/p4/n/z/FBLE-WH17_V1.jpg',
      name: 'The Salad Plates Set of 4',
      seller: 'Charles Cui',
      price: '27.99',
      category: 'lifestyle',
    },
    {
      id: 20,
      image: 'https://is4.revolveassets.com/images/p4/n/z/SNYL-WH6_V1.jpg',
      name: 'Sunnylife Chess & Checkers',
      seller: 'Jene Vachirapong',
      price: '12.99',
      category: 'others',
    },
    {
      id: 21,
      image: 'https://is4.revolveassets.com/images/p4/n/z/GLAC-WU5_V2.jpg',
      name: 'Multimedia X Led Light Kit',
      seller: 'Micah Grey',
      price: '42.99',
      category: 'events',
    },
    {
      id: 22,
      image: 'https://is4.revolveassets.com/images/p4/n/z/SNYL-WH58_V1.jpg',
      name: 'Reclining Beach Chair',
      seller: 'Ehna Choi',
      price: '32.99',
      category: 'events',
    },
    {
      id: 23,
      image: 'https://is4.revolveassets.com/images/p4/n/z/SNYL-WH24_V2.jpg',
      name: 'Pickle Ball Set',
      seller: 'Grace Zheng',
      price: '20.99',
      category: 'sports',
    },
    {
      id: 24,
      image: 'https://is4.revolveassets.com/images/p4/n/uv/PNTW-WH40_V1.jpg',
      name: 'Mini Tennis Set',
      seller: 'Hankie Yoo',
      price: '15.99',
      category: 'sports',
    }
  ];

  let filteredProducts = [];

  if (selectedCategory === null) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }  

  return (
    <div id="recommended-products" className="container mt-4">
      {showTitle && selectedCategory === null && <h2>Based on your taste</h2>}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}