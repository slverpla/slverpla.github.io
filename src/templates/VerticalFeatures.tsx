import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="Buy and sell plants"
      description="Connect with plant enthusiasts worldwide to buy, sell, or trade your favorite plants. Whether you're looking for something special or want to find a new home for your extra plants, our community is the perfect place to grow your collection."
      image="/assets/images/buying_and_selling_blur_bg.png"
      imageAlt="Illustration of people trading plants"
    />
    <VerticalFeatureRow
      title="Plant Recognition"
      description="Identify any plant with a simple snap of your camera. Our AI-powered recognition system helps you discover species names, care requirements, and interesting facts about the plants you encounter in gardens, parks, or your daily life."
      image="/assets/images/search_plants.png"
      imageAlt="Plant identification through camera illustration"
      reverse
    />
    <VerticalFeatureRow
      title="Expert Plant Care"
      description="Get personalized advice from botanists and plant specialists. Whether you're dealing with pest problems, growth issues, or seeking care tips, our plant doctors are here to help your green friends thrive."
      image="/assets/images/doctor_edited.png"
      imageAlt="Plant care expert consultation illustration"
    />
  </Section>
);

export { VerticalFeatures };
