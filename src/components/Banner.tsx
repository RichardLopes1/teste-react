import image from "../assets/Banner.jpg";
import { SectionBanner } from "../styled";

export default function Banner() {
    return (
        <SectionBanner>
            <div className="banner">
                <img src={image} alt="" />
            </div>
        </SectionBanner>
    )
}