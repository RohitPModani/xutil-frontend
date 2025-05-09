import UnitConverter from './UnitConverter';
import seoDescriptions from '../../data/seoDescriptions';

function LengthConverter() {
  const seo = seoDescriptions.length;

  const units = [
    { value: 'mm', label: 'Millimeters (mm)' },
    { value: 'cm', label: 'Centimeters (cm)' },
    { value: 'm', label: 'Meters (m)' },
    { value: 'km', label: 'Kilometers (km)' },
    { value: 'inch', label: 'Inches (in)' },
    { value: 'ft', label: 'Feet (ft)' },
    { value: 'yd', label: 'Yards (yd)' },
    { value: 'mi', label: 'Miles (mi)' },
    { value: 'nm', label: 'Nautical Miles (nm)' },
  ];

  return (
    <UnitConverter
      seo={seo}
      defaultValue="1"
      defaultUnit="m"
      units={units}
      apiEndpoint="length"
      converterName="Length Converter"
      validationMessage="Length must be greater than zero."
    />
  );
}

export default LengthConverter;