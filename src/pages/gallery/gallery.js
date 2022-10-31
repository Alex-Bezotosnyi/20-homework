import galleryCSS from "./style/gallery.module.css"
import Image1 from "./assets/green-mile.png"
import Image2 from "./assets/shawshank-redemption.png"
import Image3 from "./assets/forrest-gump-image.png"

function Gallery() {
    return (
        <div className={galleryCSS.wrapper}>
            <div><img src={Image1} alt="Image1"/></div>
            <div><img src={Image2} alt="Image2"/></div>
            <div><img src={Image3} alt="Image3"/></div>
        </div>
    )
}

export default Gallery;