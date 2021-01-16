import React from "react";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import MediaGallery from "./MediaGallery";
import { Image } from "../Image";

const storyTitle = "components/Carousel/Media Gallery"; // Stories can be organized in a nested structure using ”/” as a separator, and can be given a top-level heading using a ”|” root separator

const parameters = {
  component: MediaGallery,
  componentSubtitle: "<MediaGallery /> defines a Media Gallery",
  jest: ["MediaGallery"]
};

// Pictures from https://osilife.com/cards/greeting-cards/assorted-cards-for-all-occasions-in-floral-organizer-box-box-of-24-1BCE4202.html
storiesOf(storyTitle, module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs({ ignoreProps: ["children", "id"] }))
  .add("Responsive width w/ Arrow controls", () => (
    <div>
      <MediaGallery id="mg-example-1">
        <Image
          className="media-gallery_image"
          alt="pic-1"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw2586f03e/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_01.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-2"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwa35d8bf7/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_02.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-3"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1f0521c8/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_05.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-4"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1e5679a5/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_09.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-5"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw7d6a8778/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_13.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-6"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwfa5ef493/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_14.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
      </MediaGallery>
    </div>
  ))
  .add("Images with different aspect ratios", () => (
    <div>
      <MediaGallery id="mg-example-1">
        <Image
          className="media-gallery_image"
          alt="pic-1"
          src="https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
        />
        <Image
          className="media-gallery_image"
          alt="pic-2"
          src="https://www.southernsavers.com/wp-content/uploads/2016/04/free-hallmark-cards.jpg"
        />
        <Image
          className="media-gallery_image"
          alt="pic-6"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwfa5ef493/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_14.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
      </MediaGallery>
    </div>
  ))
  .add("Multiple Carousels", () => (
    <div style={{ maxWidth: "400px" }}>
      <MediaGallery id="mg-example-2">
        <Image
          className="media-gallery_image"
          alt="pic-1"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw2586f03e/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_01.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-2"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwa35d8bf7/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_02.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-3"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1f0521c8/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_05.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-4"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1e5679a5/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_09.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-5"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw7d6a8778/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_13.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-6"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwfa5ef493/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_14.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
      </MediaGallery>
      <MediaGallery id="mg-example-3">
        <Image
          className="media-gallery_image"
          alt="pic-1"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw2586f03e/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_01.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-2"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwa35d8bf7/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_02.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-3"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1f0521c8/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_05.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-4"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw1e5679a5/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_09.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-5"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw7d6a8778/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_13.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
        <Image
          className="media-gallery_image"
          alt="pic-6"
          src="https://cdn-us-ec.yottaa.net/56213828312e5803810043dd/www.hallmark.com/v~4b.21a/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwfa5ef493/images/finished-goods/Assorted-Cards-for-AllOccasions-in-Floral-Organizer-Box-Box-of-24-root-1BCE4202_BCE4202_14.jpg_Source_Image.jpg?sw=1024&yocs=27_"
        />
      </MediaGallery>
    </div>
  ));
