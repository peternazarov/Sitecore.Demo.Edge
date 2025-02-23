import { Field, Link, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FullImageSectionProps = ComponentProps & {
  fields: {
    cssClass: Field<string>;
    position: Field<string>;
    title: Field<string>;
    subtitle: Field<string>;
    content: Field<string>;
    callToActionLink: LinkField;
  };
};

const FullImageSection = ({ fields }: FullImageSectionProps): JSX.Element => {
  const sectionCssClasses = `section section__full-image ${fields.cssClass.value}`;
  const positionCssClasses = `section__content section__full-image__content section__full-image__content--${fields.position.value}`;

  return (
    <section className={sectionCssClasses}>
      <div className={positionCssClasses}>
        <div className="section__full-image__content__card">
          <Text tag="h5" field={fields.subtitle} />
          <Text tag="h2" field={fields.title} />
          <RichText tag="p" field={fields.content} />
          {fields.callToActionLink && (
            <Link
              field={fields.callToActionLink}
              className="btn--main btn--main--round call-to-action-button"
            ></Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FullImageSection;
