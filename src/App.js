import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  // Array of products to query (Dataset)
  const products = [
    "Apple iPhone 13",
    "Samsung Galaxy S22",
    "Sony PlayStation 5",
    "Microsoft Xbox Series X",
    "Nintendo Switch",
    "Dell XPS 15 Laptop",
    "Apple MacBook Pro",
    "Samsung QLED TV",
    "Bose QuietComfort 45 Headphones",
    "Canon EOS R6 Camera",
    "Sony WH-1000XM4 Headphones",
    "LG OLED TV",
    "Amazon Echo Dot",
    "Google Pixel 6",
    "Fitbit Charge 5",
    "Apple Watch Series 7",
    "Microsoft Surface Pro 8",
    "Logitech G Pro X Wireless Gaming Headset",
    "DJI Mavic Air 2 Drone",
    "GoPro Hero 10 Black",
    "Nikon Z6 II Camera",
    "Sony A7 III Camera",
    "Bose SoundLink Revolve+ Bluetooth Speaker",
    "Samsung Odyssey G7 Gaming Monitor",
    "Asus ROG Zephyrus G14 Laptop",
    "HP Envy 13 Laptop",
    "Apple iPad Air",
    "Microsoft Surface Laptop 4",
    "LG C1 OLED TV",
    "Sonos Beam Soundbar",
    "Apple AirPods Pro",
    "Samsung Galaxy Watch 4",
    "Garmin Fenix 7",
    "Razer BlackWidow V3 Mechanical Gaming Keyboard",
    "Corsair Virtuoso RGB Wireless Gaming Headset",
    "Anker PowerCore 26800 Portable Charger",
    "Google Nest Hub Max",
    "Amazon Kindle Paperwhite",
    "Dell UltraSharp U2720Q Monitor",
    "Sony WH-CH710N Noise Cancelling Headphones",
    "Bose Home Speaker 500",
    "Canon EOS RP Camera",
    "Nikon D850 Camera",
    "GoPro HERO9 Black",
    "DJI OM 4 Smartphone Gimbal",
    "Apple TV 4K",
    "Sony X900H 4K TV",
    "LG NanoCell 85 Series 4K TV",
    "Microsoft Xbox Elite Wireless Controller Series 2",
    "PlayStation VR",
    "Nintendo Switch Pro Controller",
    "Google Pixelbook Go",
    "Fitbit Versa 3",
    "Apple AirTag",
    "Samsung Galaxy Buds Pro",
    "Bose Sport Earbuds",
    "Sony WF-1000XM4 Noise Cancelling Earbuds",
    "Logitech MX Master 3 Wireless Mouse",
    "Razer DeathAdder V2 Gaming Mouse",
    "Apple HomePod mini",
    "Google Nest Audio",
    "Amazon Echo Show 10",
    "HP Spectre x360 13 Laptop",
    "Lenovo ThinkPad X1 Carbon",
    "Asus ROG Swift PG279Q Gaming Monitor",
    "LG Gram Laptop",
    "Sony X950H 4K TV",
    "Bose SoundSport Free Wireless Earbuds",
    "Canon EOS R5 Camera",
    "Nikon Z7 II Camera",
    "DJI Mini 2 Drone",
    "GoPro HERO8 Black",
    "Garmin Forerunner 945",
    "Apple Magic Keyboard",
    "Samsung Galaxy Tab S7",
    "Microsoft Surface Go 2",
    "Amazon Fire HD 10 Tablet",
    "Google Pixel 5a",
    "Fitbit Inspire 2",
    "Apple AirPods Max",
    "Samsung Galaxy Buds Live",
    "Bose Frames Audio Sunglasses",
    "Sony WF-SP800N Noise Cancelling Earbuds",
    "Logitech G502 Hero Gaming Mouse",
    "Razer Huntsman Elite Gaming Keyboard",
    "Apple iPad Pro",
    "Google Pixelbook",
    "Amazon Echo Dot Kids Edition",
    "HP Pavilion 15 Laptop",
    "Lenovo IdeaPad 5",
    "Asus ROG Strix XG279Q Gaming Monitor",
    "LG UltraGear 27GN950-B Gaming Monitor",
    "Sony X800H 4K TV",
    "Bose SoundLink Color Bluetooth Speaker II",
    "Canon EOS 90D Camera",
    "Nikon D780 Camera",
    "DJI Air 2S Drone",
    "GoPro HERO7 Black",
    "Garmin Vivoactive 4",
    "Apple Magic Mouse 2",
    "Samsung Galaxy Tab A7",
    "Microsoft Surface Duo",
    "Amazon Kindle Oasis",
    "Google Nest Mini",
    "Fitbit Luxe",
    "Apple AirPods (3rd generation)",
    "Samsung Galaxy Watch Active 2",
    "Bose QuietComfort Earbuds",
    "Sony WI-1000XM2 Noise Cancelling Earbuds",
    "Logitech MX Anywhere 3 Wireless Mouse",
    "Razer Viper Ultimate Wireless Gaming Mouse",
    "Apple iPad mini",
    "Google Pixel Slate",
    "Amazon Echo Studio",
    "HP Omen 15 Laptop",
    "Lenovo Legion 5 Gaming Laptop",
    "Asus TUF Gaming VG27AQ Gaming Monitor",
    "LG 27UK850-W 4K Monitor",
    "Sony A6400 Camera",
    "Bose SoundLink Mini Bluetooth Speaker II",
    "Canon EOS M50 Camera",
    "Nikon D3500 Camera",
    "DJI Spark Drone",
    "GoPro HERO9 Black",
    "Garmin Venu",
    "Apple Magic Trackpad 2",
    "Samsung Galaxy Tab S6",
    "Microsoft Surface Pro 7",
    "Amazon Fire HD 8 Tablet",
    "Google Pixel 4a",
    "Fitbit Sense",
    "Apple AirPods (2nd generation)",
    "Samsung Galaxy Watch 3",
    "Bose SoundSport Wireless Earbuds",
    "Sony WF-XB700 Extra Bass Earbuds",
    "Logitech G Pro Wireless Gaming Mouse",
    "Razer Basilisk Ultimate Wireless Gaming Mouse",
    "Apple MacBook Air",
    "Google Pixelbook Pixel Slate Keyboard",
    "Amazon Echo Dot (4th generation)",
    "HP Envy x360 13 Laptop",
    "Lenovo Yoga C940",
    "Asus ROG Swift PG259QN Gaming Monitor",
    "LG 34GN850-B Ultragear Curved Gaming Monitor",
    "Sony A7C Camera",
    "Bose SoundLink Revolve Bluetooth Speaker",
    "Canon EOS Rebel T7 Camera",
    "Nikon D5600 Camera",
    "DJI Phantom 4 Pro Drone",
    "GoPro MAX",
    "Garmin Instinct",
    "Apple Magic Keyboard with Numeric Keypad",
    "Samsung Galaxy Tab S7+",
    "Microsoft Surface Laptop Go",
    "Amazon Kindle",
    "Google Nest Hub",
    "Fitbit Inspire HR",
    "Apple Watch SE",
    "Samsung Galaxy Fit 2",
    "Bose SoundLink Micro Bluetooth Speaker",
    "Sony WF-SP700N Noise Cancelling Earbuds",
    "Logitech G203 Prodigy Gaming Mouse",
    "Razer DeathAdder Essential Gaming Mouse",
    "Apple iMac",
    "Google Nest WiFi",
    "Amazon Echo Flex",
    "HP Elite Dragonfly Laptop",
    "Lenovo Chromebook",
  ];

  //Store query value
  const [searchQuery, setSearchQuery] = useState("");

  //Queries the dataset without debounce functionality
  const queryDatasetWithoutDebounce = (query) => {
    if (query.trim() == "") return;

    //Executes this whenever the user strikes a key 
    const matchedResults = products.filter((eachName) =>
      eachName.toLowerCase().includes(query.toLowerCase())
    );
    console.log(
      `Dataset queried. \nResults: ${
        matchedResults.length > 0 ? matchedResults : "No match."
      }`
    );
  };

  //Stores debounce timer id
  let debounceTimer;

  //Queries the dataset with debounce functionality
  const queryDatasetWithDebounce = (query) => {
    //Doesn't execute an empty query
    if (query.trim() === "") return;

    //Clears timeout on every execution
    clearTimeout(debounceTimer);

    //Perform dataset query after timeout
    debounceTimer = setTimeout(() => {
      const matchedResults = products.filter((eachName) =>
        eachName.toLowerCase().includes(query.toLowerCase())
      );
      console.log(
        `Dataset queried. \nResults: ${
          matchedResults.length > 0 ? matchedResults : "No match."
        }`
      );
    }, 1500);
  };

  //Executes whenever query is changed
  useEffect(() => {
    queryDatasetWithDebounce(searchQuery);

    // queryDatasetWithoutDebounce(searchQuery);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery]);

  return (
    <main className="app_wrapper">
      {/* Query input field */}
      <form>
        <input
          type="text"
          name="query"
          placeholder="Find a product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </main>
  );
};

export default App;
