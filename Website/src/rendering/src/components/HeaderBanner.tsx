import { Text, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type HeaderBannerProps = ComponentProps & {
  fields: {
    eyebrow: Field<string>;
    title: Field<string>;
    subtitle: Field<string>;
    backgroundImage: ImageField;
  };
};

const HeaderBanner = (props: HeaderBannerProps): JSX.Element => {
  const sectionStyles = props.fields.backgroundImage?.value?.src
    ? {
        backgroundImage: `url("${props.fields.backgroundImage.value.src}")`,
      }
    : {};

  return (
    <section className="section header-banner" style={sectionStyles}>
      <div className="section__content section__content--left">
        <Text className="eyebrow" tag="p" field={props.fields.eyebrow} />
        <Text className="title" tag="h1" field={props.fields.title} />
        <Text className="subtitle" tag="p" field={props.fields.subtitle} />
      </div>
    </section>
  );
};

export default HeaderBanner;
