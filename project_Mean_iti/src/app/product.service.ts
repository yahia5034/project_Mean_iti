import { Injectable } from '@angular/core';
import { AllProductsComponent } from './all-products/all-products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  pharmacyData: any[] = [
    {
      "name": "Lipstick",
      "manufacturer": "L’Oréal Paris",
      "type": "Makeup",
      "usage": "Apply directly to lips",
      "description": "A cosmetic product used to add color and texture to the lips.",
      "photo_link": "https://m.media-amazon.com/images/I/71WohjNxRlL._SL1500_.jpg",
      "price": 8,
      "rating": 4.4,
      "id":2
    },
    {
      "name": "Moisturizer",
      "manufacturer": "CeraVe",
      "type": "Skincare",
      "usage": "Apply to clean face and neck",
      "description": "A cosmetic product used to hydrate and nourish the skin.",
      "photo_link": "https://m.media-amazon.com/images/I/71Z-Dmc7RoL._SL1500_.jpg",
      "price" : 18,
      "rating" : 4.8,
      "id" : 5
    },
    {
      "name": "Mascara",
      "manufacturer": "essence",
      "type": "Makeup",
      "usage": "Apply to eyelashes for enhanced volume and length",
      "description": "A cosmetic product used to darken, lengthen, and thicken the eyelashes.",
      "photo_link": "https://m.media-amazon.com/images/I/61K6cQhw4EL._SL1500_.jpg",
      "price": 4.99,
      "rating": 4.3
    },
    {
      "name": "Cleanser",
      "manufacturer": "Starville",
      "type": "Skincare",
      "usage": "Apply to damp face, massage, and rinse off",
      "description": "A cosmetic product used to remove dirt, oil, and impurities from the skin.",
      "photo_link": "https://eparkville.com/cdn/shop/products/FacialCleanser400ML-293596.jpg?v=1679090973&width=600",
      "price": 17.99,
      "rating": 4.5
    },
    {
      "name": "Foundation",
      "manufacturer": "Maybelline",
      "type": "Makeup",
      "usage": "Apply evenly to face for a unified complexion",
      "description": "A cosmetic product used to even out skin tone and provide coverage.",
      "photo_link": "https://abclive1.s3.amazonaws.com/31a7f8a4-c7f7-4d3a-81a6-26f396972754/productimage/3600531324513___XL.jpg",
      "price": 10,
      "rating": 4.3
    },
    {
      "name": "Sunscreen",
      "manufacturer": "Neutrogena",
      "type": "Skincare",
      "usage": "Apply generously to exposed skin before sun exposure",
      "description": "A cosmetic product used to protect the skin from harmful UV rays.",
      "photo_link": "https://m.media-amazon.com/images/I/61uzqpWS4gL._SL1500_.jpg",
      "price": 8,
      "rating": 4.6
    },
    {
      "name": "Eyeshadow Palette",
      "manufacturer": "Maybelline",
      "type": "Makeup",
      "usage": "Apply to eyelids for various eye makeup looks",
      "description": "A cosmetic product containing multiple shades for creating eye makeup looks.",
      "photo_link": "https://m.media-amazon.com/images/I/91kS5YBbVzL._SL1500_.jpg",
      "price": 7.5,
      "rating": 4.4
    },
    {
      "name": "Toner",
      "manufacturer": "CeraVe",
      "type": "Skincare",
      "usage": "Apply to cleansed face with a cotton pad",
      "description": "A cosmetic product used to balance the skin's pH and remove any remaining impurities.",
      "photo_link": "https://target.scene7.com/is/image/Target/GUEST_1e0b8b52-c339-4cc4-ad40-e1ebbccd2a40",
      "price": 10,
      "rating": 4.6
    },
    {
      "name": "Concealer",
      "manufacturer": "L’Oréal Paris",
      "type": "Makeup",
      "usage": "Apply to areas needing additional coverage",
      "description": "A cosmetic product used to cover blemishes, dark circles, and imperfections.",
      "photo_link": "https://m.media-amazon.com/images/I/51ek8jVvFGL._SL1500_.jpg",
      "price": 11,
      "rating": 4.4
    },
    {
      "name": "Face Mask",
      "manufacturer": "AZURE",
      "type": "Skincare",
      "usage": "Apply to face, leave on for specified time, and rinse off",
      "description": "A cosmetic product used to nourish, hydrate, or address specific skin concerns.",
      "photo_link": "https://m.media-amazon.com/images/I/816Ahp2ZpNL._SL1500_.jpg",
      "price": 11,
      "rating": 4.2
    },
    {
      "name": "Blush",
      "manufacturer": "SHEGLAM",
      "type": "Makeup",
      "usage": "Apply to cheeks for a flush of color",
      "description": "A cosmetic product used to add color and definition to the cheeks.",
      "photo_link": "https://m.media-amazon.com/images/I/41e5ZzLrkLL._SL1500_.jpg",
      "price": 6,
      "rating": 4.6
    },
    {
      "name": "Serum",
      "manufacturer": "CeraVe",
      "type": "Skincare",
      "usage": "Apply to clean face before moisturizer",
      "description": "A cosmetic product with concentrated active ingredients to target specific skin concerns.",
      "photo_link": "https://m.media-amazon.com/images/I/411Y0nzh9zL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 15,
      "rating": 4.6
    },

    {
      "name": "Eyeliner",
      "manufacturer": "MAYBELLINE",
      "type": "Makeup",
      "usage": "Apply along the lash line to define the eyes",
      "description": "A cosmetic product used to enhance the shape and definition of the eyes.",
      "photo_link": "https://m.media-amazon.com/images/I/31wj5vRROwL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 17,
      "rating": 4.4
    },
    {
      "name": "Lip Balm",
      "manufacturer": "Labello",
      "type": "Skincare",
      "usage": "Apply to lips for hydration and protection",
      "description": "A cosmetic product used to moisturize and protect the lips from dryness.",
      "photo_link": "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/l/a/labello-soft-rose-lip-balm-4-8g.jpg",
      "price": 7,
      "rating": 4.2
    },
    {
      "name": "Bronzer",
      "manufacturer": "SHEGLAM",
      "type": "Makeup",
      "usage": "Apply to areas of the face for a sun-kissed glow",
      "description": "A cosmetic product used to add warmth and dimension to the complexion.",
      "photo_link": "https://m.media-amazon.com/images/I/31RRihw02IL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 7,
      "rating": 4.4
    },
    {
      "name": "Night Cream",
      "manufacturer": "CeraVe",
      "type": "Skincare",
      "usage": "Apply to clean face and neck before bed",
      "description": "A cosmetic product used to nourish and repair the skin overnight.",
      "photo_link": "https://m.media-amazon.com/images/I/411crd4ECqL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 14,
      "rating": 4.6
    },
    {
      "name": "Setting Spray",
      "manufacturer": "NYX",
      "type": "Makeup",
      "usage": "Spray over finished makeup to prolong wear",
      "description": "A cosmetic product used to set and lock makeup in place for extended wear.",
      "photo_link": "https://m.media-amazon.com/images/I/31F3ziqlb2L._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 8.5,
      "rating": 4.4
    },
    {
      "name": "Sheet Mask",
      "manufacturer": "Garnier",
      "type": "Skincare",
      "usage": "Apply to face, leave on for specified time, and remove",
      "description": "A cosmetic product in the form of a sheet soaked in serum for targeted skincare benefits.",
      "photo_link": "https://m.media-amazon.com/images/I/51215U5VwWL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 4,
      "rating": 4.6
    },
    {
      "name": "Lip Gloss",
      "manufacturer": "MAYBELLINE",
      "type": "Makeup",
      "usage": "Apply to lips for a glossy finish",
      "description": "A cosmetic product used to add shine and a hint of color to the lips.",
      "photo_link": "https://m.media-amazon.com/images/I/41FeAjxJqmL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 6,
      "rating": 4.5
    },
    {
      "name": "Eye Cream",
      "manufacturer": "CeraVe ",
      "type": "Skincare",
      "usage": "Gently pat around the eye area for hydration and addressing concerns",
      "description": "A cosmetic product specifically formulated for the delicate skin around the eyes.",
      "photo_link": "https://m.media-amazon.com/images/I/417F7zqDlCL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 14,
      "rating": 4.5
    },
    {
      "name": "Liquid Foundation",
      "manufacturer": "L’Oréal Paris ",
      "type": "Makeup",
      "usage": "Apply evenly to face for a natural-looking base",
      "description": "A cosmetic product in liquid form used to create an even and flawless complexion.",
      "photo_link": "https://m.media-amazon.com/images/I/71OAKVeQS5L._SX425_.jpg",
      "price": 15,
      "rating": 4.2
    },
    {
      "name": "Body Oil",
      "manufacturer": "Bio-Oil ",
      "type": "Skincare",
      "usage": "Apply a few drops to clean face for added hydration",
      "description": "A cosmetic product containing nourishing oils to provide hydration and moisture to the skin.",
      "photo_link": "https://m.media-amazon.com/images/I/41ZNhBd45lL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 10,
      "rating": 4.6
    },
    {
      "name": "Nail Polish",
      "manufacturer": "essie",
      "type": "Makeup",
      "usage": "Apply to nails for color and finish",
      "description": "A cosmetic product used to add color and gloss to the nails.",
      "photo_link": "https://m.media-amazon.com/images/I/51Lba+A6cDL._SL1500_.jpg",
      "price": 4,
      "rating": 4.5
    },
    {
      "name": "Exfoliating Scrub",
      "manufacturer": "Dove",
      "type": "Skincare",
      "usage": "Massage onto damp skin in circular motions and rinse off",
      "description": "A cosmetic product used to remove dead skin cells and promote a smoother complexion.",
      "photo_link": "https://m.media-amazon.com/images/I/41-X6Uj5c2L._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 7,
      "rating": 4.7
    },

    {
      "name": "Shampoo",
      "manufacturer": "Sunsilk",
      "type": "Haircare",
      "usage": "Apply to wet hair, massage into the scalp, and rinse thoroughly",
      "description": "A haircare product used to cleanse and remove dirt and oil from the hair and scalp.",
      "photo_link": "https://m.media-amazon.com/images/I/31oWsK-iIlL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 11,
      "rating": 4.2
    },
    {
      "name": "Conditioner",
      "manufacturer": "Sunsilk",
      "type": "Haircare",
      "usage": "Apply to wet hair after shampooing, leave on for a few minutes, and rinse off",
      "description": "A haircare product used to moisturize, detangle, and soften the hair.",
      "photo_link": "https://m.media-amazon.com/images/I/41GDbq6cUJL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 15,
      "rating": 4.1
    },
    {
      "name": "Hair Serum",
      "manufacturer": "HerStyler",
      "type": "Haircare",
      "usage": "Apply to damp or dry hair to smooth and add shine",
      "description": "A haircare product used to tame frizz, add shine, and provide heat protection.",
      "photo_link": "https://m.media-amazon.com/images/I/31OKo9u6V4L._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 11,
      "rating": 4.4
    },
    {
      "name": "Facial Mask",
      "manufacturer": "Garnier",
      "type": "Haircare",
      "usage": "Apply to clean, damp hair, leave on for specified time, and rinse off",
      "description": "A haircare product used to deeply nourish, hydrate, and repair damaged hair.",
      "photo_link": "https://m.media-amazon.com/images/I/51zpBo+Bg6L._SY300_SX300_.jpg",
      "price": 7,
      "rating": 4.3
    },
    {
      "name": "Hair Oil",
      "manufacturer": "Vatika",
      "type": "Haircare",
      "usage": "Apply a few drops to dry or damp hair for added shine and hydration",
      "description": "A haircare product containing nourishing oils to provide hydration and moisture to the hair.",
      "photo_link": "https://m.media-amazon.com/images/I/41ZqUa7AnHL._SX300_SY300_QL70_FMwebp_.jpg",
      "price": 9,
      "rating": 4.4
    },

    {
      "name": "Hair Spray",
      "type": "Haircare",
      "price": 30,
      "rating": 4.4,
      "manufacturer": "XYZ Haircare",
      "usage": "Hold can 8-12 inches away from hair and spray evenly",
      "description": "A haircare product used to set and hold hairstyles in place.",
      "photo_link": "https://m.media-amazon.com/images/I/71JT2el4pKL._SL1500_.jpg"
    },
    {
      "name": "Leave-In Conditioner",
      "type": "Haircare",
      "price": 5.47,
      "rating": 4.6,
      "manufacturer": "PQR Haircare",
      "usage": "Apply to damp hair and leave it in without rinsing",
      "description": "A haircare product used to moisturize, detangle, and protect the hair throughout the day.",
      "photo_link": "https://alismailiapharmacy.com/wp-content/uploads/2020/12/F-1.jpg"
    },
    {
      "name": "Dry Shampoo",
      "type": "Haircare",
      "price": 16.50,
      "rating": 4.3,
      "manufacturer": "LMN Haircare",
      "usage": "Spray onto roots, wait a few minutes, and brush out",
      "description": "A haircare product used to refresh and absorb excess oil in the hair between washes.",
      "photo_link": "https://m.media-amazon.com/images/I/71AdHE7m+IL.jpg"
    },
    {
      "name": "Hair Mousse",
      "type": "Haircare",
      "price": 11.99,
      "rating": 4.2,
      "manufacturer": "GHI Haircare",
      "usage": "Apply to damp hair, distribute evenly, and style as desired",
      "description": "A haircare product used to add volume, body, and control to hairstyles.",
      "photo_link": "https://m.media-amazon.com/images/I/71U0ZyWNO-L.jpg"
    },
    {
      "name": "Hair Wax",
      "type": "Haircare",
      "price": 5.19,
      "rating": 4.2,
      "manufacturer": "ABC Haircare",
      "usage": "Rub a small amount between palms, apply to dry hair, and style as desired",
      "description": "A haircare product used to create texture, definition, and hold for various hairstyles.",
      "photo_link": "https://m.media-amazon.com/images/I/61ffU6miLaS._SX466_.jpg"
    },
    {
      "name": "Heat Protectant Spray",
      "type": "Haircare",
      "price": 30,
      "rating": 4.4,
      "manufacturer": "XYZ Haircare",
      "usage": "Spray onto dry or damp hair before using heat styling tools",
      "description": "A haircare product used to protect the hair from heat damage caused by styling tools such as flat irons and curling irons.",
      "photo_link": "https://m.media-amazon.com/images/I/71Wv2b2xJgL._SL1500_.jpg"
    },
    {
      "name": "Hair Color",
      "type": "Haircare",
      "price": 9.99,
      "rating": 4.5,
      "manufacturer": "PQR Haircare",
      "usage": "Follow the instructions provided with the hair color product",
      "description": "A haircare product used to change or enhance the color of the hair.",
      "photo_link": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1594850176-screen-shot-2020-07-15-at-5-52-58-pm-1594850159.png?crop=0.986870897155361xw:1xh;center,top&resize=980:*"
    },
    {
      "name": "Hair Extensions",
      "type": "Haircare",
      "price": 15,
      "rating": 5.0,
      "manufacturer": "LMN Haircare",
      "usage": "Clip, tape, or glue the extensions to the natural hair",
      "description": "Hair extensions are synthetic or natural hair strands that are added to the natural hair to add length, volume, or color.",
      "photo_link": "https://images-static.nykaa.com/media/catalog/product/e/2/e257f928904368201005_1.jpg"
    },
    {
      "name": "Hair Straightener",
      "type": "Haircare",
      "price": 25,
      "rating": 4.3,
      "manufacturer": "GHI Haircare",
      "usage": "Plug in and allow the straightener to heat up, then run it through sections of dry hair",
      "description": "A haircare tool used to straighten and smooth the hair by applying heat to the hair strands.",
      "photo_link": "https://www.rios.pk/cdn/shop/products/Ta-1088-Hair-Straightener.jpg?v=1675447909"
    },
    {
      "name": "Curling Iron",
      "type": "Haircare",
      "price": 30,
      "rating": 4.8,
      "manufacturer": "ABC Haircare",
      "usage": "Plug in and allow the curling iron to heat up, then wrap sections of hair around the barrel",
      "description": "A haircare tool used to create curls and waves in the hair by applying heat to the hair strands.",
      "photo_link": "https://www.tradeinn.com/f/13771/137717021_3/braun-as-330-v-s-curling-tongs.jpg"
    },
    {
      "name": "Hair Brush",
      "price": 10,
      "rating": 3.4,
      "type": "Haircare",
      "manufacturer": "XYZ Haircare",
      "usage": "Brush through the hair to detangle, smooth, and style",
      "description": "A haircare tool with bristles used to comb, detangle, and style the hair.",
      "photo_link": "https://m.media-amazon.com/images/I/71plS8M1mOL._SL1500_.jpg"
    },
    {
      "name": "Wide-Tooth Comb",
      "type": "Haircare",
      "price": 5.3,
      "rating": 4.1,
      "manufacturer": "PQR Haircare",
      "usage": "Use to detangle wet hair without causing breakage",
      "description": "A haircare tool with wide-spaced teeth used to gently detangle wet hair without causing breakage.",
      "photo_link": "https://www.sephora.com/productimages/sku/s2496743-main-zoom.jpg"
    },
    {
      "name": "Hair Clips",
      "type": "Haircare",
      "price": 6.3,
      "rating": 3.4,
      "manufacturer": "LMN Haircare",
      "usage": "Use to section and hold hair while styling",
      "description": "Hair clips are tools used to section and hold the hair in place while styling or performing hair treatments.",
      "photo_link": "https://www.dontwasteyourmoney.com/wp-content/uploads/2021/06/tocess-4-inch-claw-hair-clips-4-pack-hair-clips.jpg"
    },
    {
      "name": "Hair Accessories Set",
      "type": "Haircare",
      "price": 10.5,
      "rating": 3.8,
      "manufacturer": "GHI Haircare",
      "usage": "Use various hair accessories to style and accessorize the hair",
      "description": "A set of hair accessories that can include hairbands, hair ties, bobby pins, and other decorative items used to style and accessorize the hair.",
      "photo_link": "https://image.shoplc.com/products/36/9/3693209/3693209_2.jpg?w=1200&h=1200"
    },
    {
      "name": "Eye Drops",
      "type": "Drops",
      "price": 11.51,
      "rating": 3.8,
      "manufacturer": "Allergan",
      "usage": "Instill the recommended number of drops into the affected eye(s)",
      "description": "Eye drops are a type of medication delivered in liquid form for application directly into the eyes. They are commonly used to treat various eye conditions such as dryness, redness, allergies, and infections.",
      "photo_link": "https://i5.walmartimages.com/seo/Refresh-Digital-Lubricant-Eye-Drops-Preserved-Tears-10-mL_deb81451-abf6-48d6-8b80-03130174ea5e.ba3727f2385b7ee1928857e9e546e6e5.jpeg"
    },
    {
      "name": "Nasal Drops",
      "type": "Drops",
      "price": 18,
      "rating": 4.2,
      "manufacturer": "Himalaya",
      "usage": "Instill the recommended number of drops into each nostril",
      "description": "Nasal drops, also known as nasal sprays or nasal solutions, are medications delivered in liquid form for application into the nostrils. They are used to relieve nasal congestion, allergies, and sinus-related symptoms.",
      "photo_link": "https://himalayawellness.in/cdn/shop/products/BRESOL-NS-SNS-10ml.jpg?v=1659002382"
    },
    {
      "name": "Oral Drops",
      "type": "Drops",
      "price": 10.75,
      "rating": 5.0,
      "manufacturer": "Weleda",
      "usage": "Administer the prescribed number of drops orally",
      "description": "Oral drops are medications that come in liquid form and are administered directly into the mouth. They are commonly used for infants and young children who may have difficulty swallowing tablets or capsules.",
      "photo_link": "https://www.weleda.co.uk/product/image/medium/206005_1.jpg"
    },
    {
      "name": "Insulin",
      "type": "Injection",
      "price": 16.61,
      "rating": 4.7,
      "manufacturer": "Eli Lilly and Company",
      "usage": "Administer the prescribed dose of insulin via subcutaneous injection",
      "description": "Insulin is a hormone used to regulate blood sugar levels in individuals with diabetes. It is administered via subcutaneous injection using insulin syringes, insulin pens, or insulin pumps.",
      "photo_link": "https://www.humulin.com/assets/images/6508_elhu_7030_3_vl_st_abv_300_b.jpg"
    },
    {
      "name": "Epinephrine",
      "type": "Injection",
      "price": 20,
      "rating": 4.2,
      "manufacturer": "Mylan Inc",
      "usage": "Administer the prescribed dose of epinephrine via intramuscular injection in case of severe allergic reactions (anaphylaxis)",
      "description": "Epinephrine, also known as adrenaline, is a medication used to treat severe allergic reactions, such as anaphylaxis. It is administered via intramuscular injection using auto-injectors such as EpiPen.",
      "photo_link": "https://mma.prnewswire.com/media/2040256/American_Regent___Epinephrine_VialLabel_Composite_CMYK.jpg?w=200"
    },
    {
      "name": "Heparin",
      "type": "Injection",
      "manufacturer": "Pfizer CentreOne",
      "price": 25.61,
      "rating": 4.5,
      "usage": "Administer the prescribed dose of heparin via subcutaneous or intravenous injection to prevent blood clotting",
      "description": "Heparin is an anticoagulant medication used to prevent blood clot formation. It is administered via subcutaneous or intravenous injection and is commonly used in hospital settings.",
      "photo_link": "https://careformulationlabs.com/wp-content/uploads/2023/07/HEPARIN-INJ.jpeg"
    },
    {
      "name": "Vitamin B12 Injection",
      "type": "Injection",
      "manufacturer": "Pharmavit",
      "price": 21.61,
      "rating": 4.3,
      "usage": "Administer the prescribed dose of vitamin B12 via intramuscular injection to treat vitamin B12 deficiency",
      "description": "Vitamin B12 injections are used to treat vitamin B12 deficiency, which can cause anemia and nerve damage. The injections are administered via intramuscular injection.",
      "photo_link": "https://www.eyecareandcure.com/core/media/media.nl?id=5385&c=723462&h=yNaEzySHTmOuNTgB_FqdiXTHigaMvw5hUklsAjJ7w585WPN7"
    },
    {
      "name": "Paracetamol",
      "type": "Tablet",
      "price": 9.61,
      "rating": 4.8,
      "manufacturer": "Johnson & Johnson",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Paracetamol, also known as acetaminophen, is a common over-the-counter medication used to relieve pain and reduce fever. It is available in tablet form and is taken orally.",
      "photo_link": "https://assets.sainsburys-groceries.co.uk/gol/8075006/1/640x640.jpg"
    },
    {
      "name": "Amoxicillin",
      "type": "Tablet",
      "manufacturer": "sunbiolab",
      "price": 1,
      "rating": 3.9,
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Amoxicillin is an antibiotic medication used to treat bacterial infections. It is available in tablet form and is taken orally. It is commonly prescribed for respiratory, ear, throat, and urinary tract infections.",
      "photo_link": "https://image.made-in-china.com/2f0j00tmKWRQVlsabD/Amoxicillin-Chewable-Tablets-200mg-Chemical-Pharmaceutical.webp"
    },
    {
      "name": "Omeprazole",
      "type": "Capsule",
      "price": 13.56,
      "rating": 4.8,
      "manufacturer": "PERRIGO COMPANY",
      "usage": "Swallow the prescribed number of capsules with water, preferably before a meal",
      "description": "Omeprazole is a proton pump inhibitor (PPI) used to reduce stomach acid production. It is available in capsule form and is taken orally.",
      "photo_link": "https://m.media-amazon.com/images/I/614WCt6UeWL._AC_UF1000,1000_QL80_.jpg"

    },
    {
      "name": "Ibuprofen",
      "type": "Tablet",
      "price": 13.35,
      "rating": 4.0,
      "manufacturer": "BASF",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It is available in tablet form and is taken orally.",
      "photo_link": "https://www.medicinedirect.co.uk/media/catalog/product/cache/8bf3693ed458c257f5171ffffa4e8921/2/2/220-4956.jpg"

    },
    {
      "name": "Loratadine",
      "type": "Tablet",
      "price": 7.99,
      "rating": 5.0,
      "manufacturer": "Blooms the Chemist",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Loratadine is an antihistamine medication used to relieve allergy symptoms such as sneezing, runny nose, and itchy/watery eyes. It is available in tablet form and is taken orally.",
      "photo_link": "https://cdn11.bigcommerce.com/s-dru0n5qi4q/images/stencil/original/products/2596/7525/Loratadine-10__85186.1660264579.jpg?c=1"

    },
    {
      "name": "Aspirin",
      "type": "Tablet",
      "price": 20.79,
      "rating": 4.7,
      "manufacturer": "Bayer",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Aspirin is a medication used to relieve pain, reduce inflammation, and lower fever. It is also used as a blood thinner to prevent blood clot formation. It is available in tablet form and is taken orally.",
      "photo_link": "https://m.media-amazon.com/images/I/71t7OPcEj7L._AC_SX679_.jpg"

    },
    {
      "name": "Ciprofloxacin",
      "type": "Tablet",
      "price": 14.5,
      "rating": 4.4,
      "manufacturer": "Cipla Ltd",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Ciprofloxacin is an antibiotic medication used to treat various bacterial infections. It is available in tablet form and is taken orally.",
      "photo_link": "https://locatelcolombia.vteximg.com.br/arquivos/ids/233676-1000-1000/7415100474416_1_CIPRO-500-MG-CAJA-X-8-COMPRIMIDOS.jpg?v=637441861020630000"

    },
    {
      "name": "Lisinopril",
      "type": "Tablet",
      "price": 0.29,
      "rating": 4.6,
      "manufacturer": "MERCK",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure and heart failure. It is available in tablet form and is taken orally.",
      "photo_link": "https://www.mintrxpharmacy.com/on/demandware.static/-/Sites-master-catalog/default/dw65171d70/images/products/lisinopril10mg.jpg"

    },
    {
      "name": "Atorvastatin",
      "type": "Tablet",
      "price": 17.76,
      "rating": 3.8,
      "manufacturer": "Daana Pharma Co",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Atorvastatin is a medication used to lower cholesterol levels in the blood. It is available in tablet form and is taken orally.",
      "photo_link": "https://www.daanapharma.com/files/cache/files_products_544465DSC_7258[0e2b46b3d6178921537e072ec9f43bdc].jpg"

    },
    {
      "name": "Metformin",
      "type": "Tablet",
      "price": 12.99,
      "rating": 4.9,
      "manufacturer": "Harman Finochem",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Metformin is an oral antidiabetic medication used to manage type 2 diabetes. It helps control blood sugar levels and is taken orally in tablet form.",
      "photo_link": "https://www.ukmeds.co.uk/media/catalog/product/cache/0fa74f79104c51d256533821159b596d/m/e/metformin_500mg_-_28_tablets-1.jpg"

    },
    {
      "name": "Simvastatin",
      "type": "Tablet",
      "price": 29,
      "rating": 4.8,
      "manufacturer": "Merck & Co.",
      "usage": "Take the prescribed number of tablets orally with water",
      "description": "Simvastatin is a medication used to lower cholesterol levels in the blood. It is available in tablet form and is taken orally.",
      "photo_link": "https://res.cloudinary.com/zava-www-uk/image/upload/fl_progressive/a_exif,f_auto,e_sharpen:100,c_fit,w_920,h_690,q_70/v1518634087/uk/services-setup/chronic-unit/high-cholesterol-unit/simvastatin-unit/vu2cvr5dmlisfigj4end.jpg"

    }
  ]
  allProducts: any[] = []
  returnedObjects: any[] = []

  constructor() { }
  getAllProducts() {
    return this.pharmacyData;
  }
  getHighRatedProducts() {
    for (const item of this.pharmacyData) {
      if (item.rating >= 4.8)
        this.returnedObjects.push(item)
    }
    return this.returnedObjects;
  }
  getProductById(id:number) {
    return this.pharmacyData.find(product => product.id === id)
  }
 
  getCategory(category:string){
   let allSelectedCategory:any[] =[]
       this.pharmacyData.filter((select)=>{
         if(select.type===category){
           allSelectedCategory.push(select);
         }
       })
       console.log(allSelectedCategory);
       
       return allSelectedCategory;
       
     } 
 
//   searchAllProducts(searchVal: string): any {
//     if (searchVal == "") {
//       return this.getAllProducts();
//     } else {
//       this.allProducts = this.getAllProducts()
//         .filter((item) => {
//           if (item.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())) {
//             // this.allProducts.push(item)
//             return item;
//       }})
//     }  
//   }

}

