import { useEffect, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import UtilityCard from '../components/UtilityCard';
import { ArrowLeftRight, BrainCircuit, Code2, File, GitCompareArrows, Image, Network } from 'lucide-react';
import FrequentlyUsedTools from '../components/FrequentlyUsedTools';

const allUtilities = [
  {
    title: 'Encoding / Decoding',
    icon: BrainCircuit,
    items: [
      { name: 'GUID Generator', path: '/guid' },
      { name: 'ULID Generator', path: '/ulid' },
      { name: 'Password Generator', path: '/password' },
      { name: 'Morse Code Parser', path: '/morse' },
      { name: 'Hash Generator (MD5, SHA1, SHA256…)', path: '/hash' },
      { name: 'Base Encoder/ Decoder (Base32/ Base58/ Base64)', path: '/base' },
      { name: 'ROT13 / Caesar Cipher Encoder', path: '/cipher' },
      { name: 'JWT Encoder/ Decoder', path: '/jwt' },
      { name: 'URL Encoder/ Decoder', path: '/eurl' },
      { name: 'HTML Entities Encoder/ Decoder', path: '/html' },
    ],
  },
  {
    title: 'Converters',
    icon: ArrowLeftRight,
    items: [
      { name: 'XML ↔ JSON', path: '/xml_json' },
      { name: 'YAML ↔ JSON', path: '/yaml_json' },
      { name: 'CSV ↔ JSON', path: '/csv_json' },
      { name: 'JSON to TypeScript', path: '/json_ts' },
      { name: 'JSON to Python Dataclass', path: '/json_python' },
      { name: 'JSON to Pydantic Model', path: '/json_pydantic' },
      { name: 'Base Number', path: '/base_number' },
      { name: 'Text ↔ Binary / Hex / Octal / Decimal', path: '/text_base' },
      { name: 'Unix ↔ UTC', path: '/unix_utc' },
      { name: 'px ↔ rem ↔ em', path: '/px_rem_em' },
      { name: 'Timezone', path: '/timezone' },
    ],
  },
  {
    title: 'General Converters',
    icon: GitCompareArrows,
    items: [
      { name: 'Angle', path: '/angle' },
      { name: 'Area', path: '/area' },
      { name: 'Bits/Bytes', path: '/bit_byte' },
      { name: 'Energy', path: '/energy' },
      { name: 'Frequency', path: '/frequency' },
      { name: 'Fuel-Economy', path: '/fuel_economy' },
      { name: 'Length', path: '/length' },
      { name: 'Power', path: '/power' },
      { name: 'Pressure', path: '/pressure' },
      { name: 'Speed', path: '/speed' },
      { name: 'Temperature', path: '/temperature' },
      { name: 'Time Unit', path: '/time' },
      { name: 'Volume', path: '/volume' },
      { name: 'Weight', path: '/weight' }
    ],
  },
  {
    title: 'Text & Code Utilities',
    icon: Code2,
    items: [
      { name: 'Lorem Ipsum Generator', path: '/lorem' },
      { name: 'SLUG Generator', path: '/slug' },
      { name: 'Text Compare', path: '/text_compare'},
      { name: 'Regex Tester', path: '/regex' },
      { name: 'JSON Formatter & Validator', path: '/json_validator' },
      { name: 'Text Case Converter', path: '/text_case' },
      { name: 'Markdown Previewer', path: '/markdown' },
      { name: 'Whitespace / Line Break Remover', path: '/line_break_whitespace_remover' },
      { name: 'Duplicate Line Remover', path: '/duplicate_line_remover' },
      { name: 'String Counter', path: '/string_counter' },
      'String Reverser / Shuffler / Rotator',
      'Palindrome Checker / Anagram Generator',
    ],
  },
  {
    title: 'Web & Network Tools',
    icon: Network,
    items: [
      'IP Info Finder',
      'DNS Lookup',
      'Ping & HTTP Response Checker',
      'HTTP Status Code Lookup',
      'SSL Certificate Checker',
      'URL Parser',
      'Safe Port Scanner',
    ],
  },
  {
    title: 'Barcode, QR & Image Tools',
    icon: Image,
    items: [
      'QR Code Generator',
      'Barcode Generator (With Format Selector)',
      'Barcode Reader (via image upload)',
      'Color Converter (HEX ↔ RGB ↔ HSL)',
      'Hex/RGB Color Picker',
      'Favicon Generator (ICO + PNGs)',
      'Image Compressor',
      'SVG Optimizer',
      'Gradient Generator (CSS)',
      'Box Shadow Generator (CSS)',
    ],
  },
  {
    title: 'File & Misc Utilities',
    icon: File,
    items: [
      'CSV Column Extractor',
      'HTML/CSS/JS Minifier',
      'JSON/JS/CSS Prettifier',
      'Fake Data Generator (Names, Emails, etc.)',
      'UUID Validator',
    ],
  },
];

function Home() {
  const { searchQuery } = useOutletContext<{ searchQuery: string }>();

  useEffect(() => {
    document.title = 'XUtil | Developer Tools';
    const toolName = sessionStorage.getItem('lastClickedTool');
    const isMobile = window.innerWidth < 768;

    if (toolName && isMobile) {
      const elementId = toolName.replace(/\s+/g, '-').toLowerCase();
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      sessionStorage.removeItem('lastClickedTool');
    }
  }, []);

  const filteredUtilities = useMemo(() => {
    if (!searchQuery.trim()) return allUtilities;

    const query = searchQuery.toLowerCase();
    return allUtilities
      .map(group => {
        const filteredItems = group.items.filter(item => {
          const name = typeof item === 'string' ? item : item.name;
          return name.toLowerCase().includes(query);
        });
        return filteredItems.length
          ? { ...group, items: filteredItems }
          : null;
      })
      .filter((group): group is typeof allUtilities[number] => group !== null);
  }, [searchQuery]);

  return (
    <div className="space-y-8">
      <FrequentlyUsedTools />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUtilities.map((util, index) => (
          <UtilityCard
            key={index}
            title={util.title}
            icon={util.icon}
            items={util.items}
          />
        ))}
      </div>
    </div>
  );
}
//
export default Home;