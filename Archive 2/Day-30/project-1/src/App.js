import React from "react";
import Card from "./Card";
import RCard from "./RCard";

const App = () => {
  return (
    <div>
      <h1>App</h1>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />
            <Card img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwcvQsM8-g8UhqIkYhqovspXo29w2py-MZLaIBlHXL9w6X15KhrwmQrEplNiMeVNnrkZsYznXjYFlLXwJ0a-cEI5OQv7_MUv1MF5xc434aM88hZZ-JnU-Id8EGWHOcAXCBAkEZL3VKjCWE-BtfLP7p8UoO50SZ0rOGd2OtV1gz2hDOfxd3UP6AG3TViQ/w1600/4k-pc-wallpaper-ai-art.webp" />
            <Card img="https://4.bp.blogspot.com/-htgdz_hTKRI/XUuq3JIyMII/AAAAAAAAKiA/qJabYF460sMshzeK1onJKvkNnT9kXjOIgCLcBGAs/w914-h514-p-k-no-nu/astronaut-outer-space-stars-planet-uhdpaper.com-4K-4.26-wp.thumbnail.jpg" />

            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />
            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />
            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />

            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />
            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />
            <Card img="https://i.pinimg.com/originals/4e/d9/3a/4ed93a925416e114dd4f9657e9121c1b.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
