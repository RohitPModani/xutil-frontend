export interface SEODescriptionContent {
  title: string;
  body: string;
}

const seoDescriptions: Record<string, SEODescriptionContent> = {
  yamlJson: {
    title: "YAML ↔ JSON Converter",
    body: `A YAML ↔ JSON Converter is like a peace treaty between two rival clans of structured data — one adores indentation, the other worships curly braces.
Whether you're untangling cloud configs, fixing API payloads, or just trying to stop YAML from yelling about weird tags like !secret, this tool has your back.
Instantly swap between YAML and JSON without losing your mind (or your metadata).
It's perfect for developers, DevOps warriors, or anyone who's ever whispered to themselves, "Please... just work." — Good news: it does.`
  },

  jwtEncoder: {
    title: "JWT Encoder & Decoder",
    body: `A JWT Encoder & Decoder is your secret agent for debugging tokens, decoding headers, and peeking into payloads — all without leaking your secrets to the world.
Whether you're building auth flows or verifying token claims, this tool saves time and sanity.
Decode. Debug. Done.`
  },

  xmlJson: {
    title: "XML ↔ JSON Converter",
    body: `An XML ↔ JSON Converter is like a translator between two ancient tribes of data — one loves angle brackets, the other’s obsessed with curly braces.
Whether you’re wrangling legacy SOAP APIs or just trying to make your front-end and back-end stop arguing, this tool makes it painless.
Convert structured data from XML to JSON or back again in one click, without breaking a sweat or a schema.
It’s perfect for developers, integration engineers, or anyone who’s ever stared at nested tags and thought, “There’s got to be a better way.” Spoiler: there is, and it’s this.`
  },

  baseEncoder: {
    title: "Base Encoder/Decoder",
    body: `A Base Encoder/Decoder is like Google Translate — but for nerdy number systems. It converts your text into formats like Base64, Base32, or even Base58,
so you can sneak data through systems that don’t like raw binary or special characters. Need to encode a secret message? Decode a weird-looking string?
Or just make yourself look like a backend wizard? This tool has you covered. It's fast, reliable, and great for developers, security peeps, or
anyone who wants to sound cooler by saying “I just Base64-encoded that.” Bonus: it’s the legal kind of encoding that won’t get you arrested.`
  },

  cipherEncoder: {
    title: "Cipher Encoder/Decoder",
    body: `A Cipher Encoder/Decoder is your gateway to old-school encryption — the kind used by Roman emperors and nerdy puzzle-makers alike.
With Caesar and ROT13 ciphers, you can shift letters around like a magician with a secret alphabet deck. Want to send “hello” as “uryyb”?
Or confuse your friends just enough to feel mysterious without needing actual math? This tool's got you. It’s perfect for simple encoding,
brain teasers, or feeling like a cryptography boss without diving into hardcore AES or RSA. Julius Caesar would be proud — and slightly jealous of your UI.`
  },

  guidGenerator: {
    title: "GUID Generator",
    body: `A GUID (Globally Unique Identifier) is a 128-bit value that’s practically guaranteed to be unique across space, time, and coffee-fueled coding sprints.
It’s the digital equivalent of your fingerprint, except it’s used to tag things like database records, software components, and files you swear you didn’t duplicate.
If UUIDs and GUIDs were in a rock band, GUID would be the mysterious lead guitarist — always there, never repeating, and impossible to confuse with someone else.
They’re long, messy-looking strings like f81d4fae-7dec-11d0-a765-00a0c91e6bf6, but that chaos is what makes them powerful.
So next time you need something truly one-of-a-kind in your app or system, a GUID is your dependable (and dramatic) little label.`
  },

  hashGenerator: {
    title: "Hash Generator",
    body: `A Hash Generator is like a digital blender — toss in any text, and it churns out a fixed-length, irreversible string of gibberish that’s unique to your input.
Perfect for securing passwords, verifying file integrity, or just pretending you’re a cryptography wizard. Whether you're working with MD5, SHA-256,
or one of those other fancy hash functions, this tool makes sure your data has a one-way ticket to Obfuscation City. Just remember: once it’s hashed,
there’s no going back — kind of like texting your crush at 2AM. Great for devs, security pros, and anyone who wants to feel like a hacker without actually breaking anything.`
  },

  htmlEntities: {
    title: "HTML Entities Encoder/Decoder",
    body: `An HTML Entities Encoder/Decoder is like a grammar school for your code — teaching it to speak safely in a browser without accidentally summoning chaos.
Ever tried to show <div> in HTML and instead created... an actual div? Yeah, this tool fixes that.
It converts special characters (like <, >, &, and friends)
into safe, readable entities — and can turn them back when you're ready to let them run free. Perfect for web developers, bloggers, email template warriors,
or anyone tired of their angle brackets causing drama. Bonus: It’s the only time yelling “ampersand!” actually helps.`
  },

  morseCode: {
    title: "Morse Code Parser",
    body: `A Morse Code Parser is like a time machine for your text — turning modern messages into dot-dash symphonies that would've made 19th-century telegraph
operators weep with joy. Whether you're decoding secret spy messages, learning how to talk like a submarine captain, or just want your "LOL"
to go beep-beep-beeeeeep, this tool has your back. It converts regular text to Morse code and back again, making it perfect for puzzle nerds,
escape rooms, or impressing your friends with old-school tech magic. Warning: may cause sudden urges to blink SOS at parties.`
  },

  passwordGenerator: {
    title: "Password Generator",
    body: `A Password Generator is your personal cyber bodyguard — but instead of sunglasses and a suit, it hands you secure, random, hacker-proof strings
that look like keyboard rage but protect your accounts like Fort Knox. Whether you're tired of using "password123" (no judgment... okay, a little)
or just want to avoid getting pwned, this tool creates strong, customizable passwords in seconds. You choose the length, symbols, numbers, uppercase,
and voilà — a password that even your evil twin can’t guess. It's fast, secure, and saves you from the eternal regret of reusing your ex’s birthdate as your login.`
  },

  ulidGenerator: {
    title: "ULID Generator",
    body: `A ULID (Universally Unique Lexicographically Sortable Identifier) is like the cooler, more organized cousin of a UUID.
It’s time-based, so it shows up to parties in order, and it looks like it was created by someone with their life together—
not someone who just smashed their keyboard. Developers love ULIDs because they’re unique, sortable, and don’t look like ancient magic spells.
In short: it’s a clean, sleek way to identify stuff without chaos. Perfect for databases, logs, and impressing your tech friends.`
  },

  urlEncoder: {
    title: "URL Encoder/Decoder",
    body: `A URL Encoder/Decoder is like a travel agent for your text — making sure it gets through the internet without getting mugged by special characters.
Ever seen %20 instead of a space or gotten yelled at by your browser because of a rogue # or &? That’s where this tool steps in.
It converts your normal strings into safe, web-friendly formats, and can decode them right back when it’s time to chill. Whether you're building query strings,
debugging URLs, or just tired of copy-pasting into Google, this tool has your back. It’s clean, fast, and won’t judge you for trying to encode emojis.`
  },
  csvJson: {
    title: "CSV ↔ JSON Converter",
    body: `A CSV ↔ JSON Converter is like a backstage pass between two worlds — one’s a strict spreadsheet wizard, the other’s a chill API hipster.
  Whether you're prepping data for databases, feeding APIs, or just trying to make sense of a million rows without losing your mind, this tool saves the day.
  Instantly flip your tabular .csv files into neat JSON objects (or vice versa) without needing a computer science degree or sacrificing your sanity.
  Perfect for developers, data scientists, Excel escape artists, or anyone who's ever muttered, "There has to be an easier way to do this." Spoiler: there is, and it's right here.`
  },
  jsonToTs: {
    title: "JSON to TypeScript Interface Converter",
    body: `A JSON to TypeScript Interface Converter is like a magic wand for developers — wave it over your messy JSON and voilà: clean, typed, ready-to-code interfaces.
  Whether you're setting up frontends, building APIs, or just tired of guessing what properties your objects have, this tool instantly upgrades your workflow.
  Convert JSON objects into strongly-typed TypeScript interfaces (and sometimes back) without lifting a finger or missing a key.
  Perfect for TypeScript fans, backend whisperers, and anyone who's ever thought, "There’s no way I’m writing this interface by hand." Good news: you don't have to.`
  },
  jsonToPython: {
    title: "JSON to Python Dataclass Converter",
    body: `A JSON to Python Dataclass Converter is like a personal assistant for your code — it turns messy, wild JSON blobs into clean, organized Python classes with zero drama.
  Whether you're building APIs, parsing configs, or just tired of writing init methods by hand, this tool instantly generates beautiful @dataclass models that are ready to roll.
  Perfect for Pythonistas, backend builders, and anyone who's whispered, "There has to be a lazier smarter way to do this." Spoiler: there is — and it even adds type hints for extra style points.`
  },
  jsonToPydantic: {
    title: "JSON to Pydantic Model Converter",
    body: `A JSON to Pydantic Model Converter is like giving your messy JSON a law degree — suddenly, it’s strict, structured, and knows exactly what types go where.
  Instantly turn wild JSON data into fully-typed, validation-ready Pydantic models without lifting a finger (or missing a field).
  Perfect for Python devs building FastAPI apps, data validation wizards, or anyone who’s ever shouted, "Why isn’t this JSON behaving?!"
  With this tool, you get clean, predictable Pydantic classes — faster than you can say "BaseModel."`
  },  
  baseNumber: {
    title: "Base Number Converter",
    body: `A Base Number Converter is like a universal remote for numbers — flip effortlessly between binary, decimal, octal, and hexadecimal without needing a math degree.
  Whether you're debugging code, solving puzzles, or just showing off your number wizardry, this tool has your back.
  Instantly convert numbers across different bases and impress your friends (or at least confuse them a little).
  Perfect for developers, students, engineers, and anyone who thinks counting beyond 10 shouldn’t require a whiteboard.`
  },
  textBase: {
    title: "Text ↔ Base Converter",
    body: `A Text ↔ Base Converter is like a universal translator for humans and machines — it flips your readable text into Base64, Base32, or Base58, and then back like it never left.
  Whether you're encoding data for URLs, APIs, or secret messages (we won’t judge), this tool does the job instantly and painlessly.
  No more decoding headaches or guessing games — just clean, reversible conversions between text and base formats.
  Perfect for developers, tinkerers, and anyone who’s ever asked, “What even is this gibberish?” Spoiler: it’s Base64. And now you can read it.`
  },  
  unixUtc: {
    title: "UNIX ↔ UTC Timestamp Converter",
    body: `A UNIX ↔ UTC Timestamp Converter is like a time whisperer for developers — translating those cryptic seconds-since-1970 into human-readable dates (and back again) without breaking a sweat.
  Whether you're debugging logs, scheduling jobs, or just trying to figure out if “1683025923” is from the past, future, or now — this tool's got you.
  Instantly flip between UNIX epoch timestamps and formatted UTC time with zero mental math involved.
  Perfect for backend engineers, log analysts, cron job wranglers, or anyone who's ever said, "Wait… what time is that really?"`
  },  
  timezone: {
    title: "Timezone Converter",
    body: `A Timezone Converter is like your personal time-travel assistant — turning “What time is it there?” into instant clarity across continents.
  Whether you're scheduling meetings, launching global events, or just trying to avoid messaging someone at 3AM, this tool converts any time between timezones effortlessly.
  No more Googling offsets or decoding GMT madness — just pick your zones and watch the magic happen.
  Perfect for remote teams, digital nomads, and anyone who's ever rage-quit over daylight saving time.`
  },  
  pxRemEm: {
    title: "PX ↔ REM ↔ EM Converter",
    body: `A PX ↔ REM ↔ EM Converter is like a style whisperer for front-end devs — translating between absolute and relative units without frying your brain over root font sizes.
  Whether you're scaling a UI, fine-tuning responsiveness, or just want to stop guessing what 1.25rem actually means, this tool does the math instantly.
  Convert pixels to rem and em (and back) with full control over the root font size — because your design deserves precision, not approximation.
  Perfect for web developers, designers, and anyone who's ever muttered, “Why does 16px feel so different here?”`
  }, 
  timeUnit: {
    title: "Time Unit Converter",
    body: `A Time Unit Converter is like a digital timekeeper with a calculator — converting milliseconds to days, minutes to hours, or weeks to seconds without breaking a sweat.
  Whether you're debugging performance, building countdowns, or just figuring out how long “900000 ms” really is, this tool has your back.
  Convert between any time units instantly and precisely — from nanoseconds to centuries, no time frame is too weird.
  Perfect for developers, data analysts, and anyone who’s ever Googled, “How many seconds in a month?”`
  },
  bitByte: {
    title: "Bit ↔ Byte Converter",
    body: `A Bit ↔ Byte Converter is like a Rosetta Stone for digital storage — translating between bits, bytes, kilobytes, megabytes, and beyond with pixel-perfect accuracy.
  Whether you're estimating file sizes, decoding bandwidth limits, or arguing about whether 1 MB is 1000 KB or 1024, this tool sets the record straight.
  Instantly convert between bits and bytes in all their metric and binary glory — from b to TB, it's all covered.
  Perfect for developers, sysadmins, network nerds, and anyone who’s ever yelled at a download speed meter.`
  },    
  temperature: {
    title: "Temperature Converter",
    body: `A Temperature Converter is like a digital weather wizard — effortlessly translating between Celsius, Fahrenheit, and Kelvin so you never have to say “what’s 451°F in real units?” again.
  Whether you're cooking, coding, or casually wondering if -40 is really the same in both scales (it is!), this tool brings the heat and the chill.
  Instantly switch between temperature units with precision — no mental math, no boiling confusion.
  Perfect for students, devs, and anyone who’s ever Googled “convert 100 C to F” mid-conversation.`
  },
  area: {
    title: "Area Converter",
    body: `An Area Converter is like a land surveyor with superpowers — instantly flipping between square meters, acres, hectares, square miles, and more without breaking a ruler.
  Whether you're designing a room, plotting a farm, or trying to figure out what 0.25 hectares actually means, this tool clears it up fast.
  Convert any area unit quickly and confidently — from square inches to football fields.
  Perfect for architects, real estate buffs, students, and anyone who’s ever thought, “Wait… how big is an acre again?”`
  },
  length: {
    title: "Length Converter",
    body: `A Length Converter is like a tape measure that speaks every language — translating kilometers to miles, inches to centimeters, and light-years to... well, more light-years.
  Whether you're building furniture, coding units in CSS, or just curious how long a marathon really is in meters, this tool does the math for you.
  Instantly convert between any length units with full accuracy — because size *does* matter (especially in code).
  Perfect for engineers, designers, travelers, and anyone who’s tired of Googling “how many inches in a foot” for the 10th time.`
  },
  weight: {
    title: "Weight Converter",
    body: `A Weight Converter is like a digital dumbbell for your brain — effortlessly flipping between kilograms, pounds, grams, and tons with zero sweat involved.
  Whether you're calculating cargo, measuring ingredients, or just curious how much your dog weighs in stone, this tool lifts the confusion.
  Convert weight units instantly and accurately — from micrograms to megatons.
  Perfect for cooks, lifters, logistics pros, and anyone who’s ever yelled “what’s 5 lbs in kg?!” while meal-prepping.`
  },
  volume: {
    title: "Volume Converter",
    body: `A Volume Converter is like a digital measuring cup for everything — effortlessly translating between liters, gallons, cups, milliliters, and more.
  Whether you're scaling recipes, tracking fuel, or just trying to figure out how much is “a pint” in real units, this tool makes volume conversion a breeze.
  Convert between any volume unit quickly and accurately — from kitchen to chemistry lab.
  Perfect for cooks, scientists, students, and anyone who's ever asked, "How many cups is that again?"`
  },
  energy: {
    title: "Energy Converter",
    body: `An Energy Converter is like a power adapter for units — switching between joules, calories, kilowatt-hours, BTUs, and more without blowing a fuse.
  Whether you're tracking food energy, calculating physics problems, or just trying to understand what a kilojoule even means, this tool brings clarity.
  Convert any energy unit instantly and precisely.
  Perfect for scientists, fitness enthusiasts, students, and anyone who’s ever thought, "How many calories is that in real power?"`
  },
  speed: {
    title: "Speed Converter",
    body: `A Speed Converter is like cruise control for numbers — smoothly converting between km/h, mph, m/s, knots, and more in just a click.
  Whether you're clocking race times, tracking data transfer, or just wondering how fast a cheetah really is, this tool moves fast.
  Convert speed units instantly with pinpoint accuracy.
  Perfect for athletes, engineers, physics nerds, and anyone who’s ever needed to turn “miles per hour” into “meters per second” without a calculator.`
  },
  power: {
    title: "Power Converter",
    body: `A Power Converter is like a wattage wizard — flipping between watts, horsepower, kilowatts, BTUs and more without burning out.
  Whether you're sizing up appliances, configuring circuits, or just trying to figure out how strong one horsepower really is, this tool brings the juice.
  Convert any power unit quickly and accurately — from mechanical to electrical and everything in between.
  Perfect for engineers, electricians, physics students, and anyone who’s ever said, “Wait… how many watts is that?”`
  },
  pressure: {
    title: "Pressure Converter",
    body: `A Pressure Converter is like a stress reliever for unit confusion — smoothly translating between PSI, bar, Pascal, atm, and more.
  Whether you're inflating tires, calibrating instruments, or just trying to make sense of barometric data, this tool keeps it from getting too intense.
  Convert pressure values across metric and imperial systems with ease.
  Perfect for engineers, mechanics, weather geeks, and anyone who’s ever asked, “Is that too much pressure… or not enough?”`
  },
  angle: {
    title: "Angle Converter",
    body: `An Angle Converter is like a math protractor in digital form — converting between degrees, radians, gradians, and more with pinpoint precision.
  Whether you're working on geometry, animations, or just trying to understand how π fits into a circle, this tool keeps your angles in check.
  Flip between angle units instantly — no trig needed.
  Perfect for developers, students, game designers, and anyone who’s ever wondered, “How many radians is 90 degrees again?”`
  },
  frequency: {
    title: "Frequency Converter",
    body: `A Frequency Converter is like a DJ for data — smoothly spinning between Hertz, kilohertz, megahertz, and gigahertz without missing a beat.
  Whether you're tuning signals, analyzing waves, or debugging system clocks, this tool keeps things on the right frequency.
  Convert frequency values instantly across scales — from audio to RF and beyond.
  Perfect for engineers, tech enthusiasts, musicians, and anyone who’s ever asked, “How many Hz is that exactly?”`
  },
  fuelEconomy: {
    title: "Fuel Economy Converter",
    body: `A Fuel Economy Converter is like your car’s translator — flipping between MPG, L/100km, km/L and other units so you know exactly how thirsty your ride is.
  Whether you're buying a new car, tracking fuel usage, or comparing international efficiency ratings, this tool delivers fast, accurate results.
  Switch between fuel economy units without manual math or mental gymnastics.
  Perfect for drivers, travelers, mechanics, and anyone who’s ever asked, “Is 7 L/100km good?” (Spoiler: yes, kind of.)`
  },
  loremIpsum: {
    title: "Lorem Ipsum Generator",
    body: `A Lorem Ipsum Generator is like a caffeine-fueled copywriter who never sleeps — churning out placeholder text so you can focus on layout, design, and looking productive.
  Whether you're mocking up websites, testing UI components, or just sick of typing “lorem lorem blah blah,” this tool gives you instant, customizable filler text.
  Generate paragraphs, sentences, or word dumps faster than you can say “font pairing.”
  Perfect for designers, developers, and anyone who’s ever needed to fake meaningful content with Latin gibberish that still feels classy.`
  },
  textCompare: {
    title: "Text Compare Tool",
    body: `A Text Compare Tool is like a digital detective for your documents — highlighting every difference between two versions with laser-like precision.
  Whether you're comparing code snippets, text files, or just checking who copy-pasted your content, this tool lays it all out in a side-by-side showdown.
  Instantly spot changes, additions, and deletions without squinting at lines or second-guessing your memory.
  Perfect for developers, writers, editors, and anyone who’s ever thought, “Wait… did I change that?” Spoiler: you’ll know for sure.`
  },
  jsonValidator: {
  title: "JSON Validator and Formatter",
  body: `A JSON Validator and Formatter is like a code therapist — taking messy, tangled JSON and turning it into neat, well-structured, and error-free bliss.
  Whether you’re debugging API responses, cleaning up data, or just tired of your JSON looking like a jumbled word salad, this tool brings order to chaos.
  Instantly detect syntax errors, validate JSON structure, and pretty-print your data with just one click.
  Perfect for developers, data wranglers, and anyone who’s ever wondered why their JSON suddenly decided to break the whole app.`
  },
  textCase: {
    title: "Text Case Converter",
    body: `A Text Case Converter is like a wardrobe stylist for your words — effortlessly switching between uppercase, lowercase, title case, and more without breaking a sweat.
  Whether you're formatting code, cleaning up text, or just trying to figure out how to make “hello world” look fancy, this tool has your back.
  Instantly convert text to camelCase, snake_case, path-case, and other styles with zero fuss.
  Perfect for developers, writers, and anyone who’s ever thought, “Why is my text so inconsistent?” Spoiler: it won’t be anymore.`
  },
  regexTester: {
    title: "Regex Tester",
    body: `A Regex Tester is like a magic wand for your text — instantly validating, matching, and manipulating strings with the power of regular expressions.
  Whether you're debugging patterns, extracting data, or just trying to figure out why your regex isn’t working (again), this tool makes it easy.
  Test your regex against sample text, see matches in real-time, and even get explanations for complex patterns.
  Perfect for developers, data wranglers, and anyone who’s ever yelled “why won’t this regex work?!” at their screen.`
  },      
  markdownPreviewer: {
    title: "Markdown Previewer",
    body: `A Markdown Previewer is like a crystal ball for your text — instantly transforming plain Markdown into beautifully formatted HTML without any guesswork.
  Whether you're writing documentation, creating blog posts, or just trying to make your README look snazzy, this tool has you covered.
  Type or paste your Markdown, and watch as it magically turns into headings, lists, links, and more in real-time.
  Perfect for developers, writers, and anyone who’s ever thought, “How do I make this look good without using a WYSIWYG editor?” Spoiler: it’s easier than you think.`
  },  
  duplicateLineRemover: {
    title: "Duplicate Line Remover",
    body: `A Duplicate Line Remover is like a digital bouncer for your text — kicking out all the unwanted repeat guests and leaving you with a clean, unique list.
  Whether you're cleaning up code, processing data, or just tired of seeing the same line over and over again, this tool does the job in seconds.
  Paste your text, and watch as it instantly filters out duplicates, leaving only the original lines behind.
  Perfect for developers, data wranglers, and anyone who’s ever thought, “Why is this so messy?” Spoiler: it won’t be anymore.`
  },
  lineBreakWhitespaceRemover: {
    title: "Whitespace & Line Break Remover",
    body: `A Whitespace & Line Break Remover is like a digital declutterer for your text — instantly zapping away unwanted spaces, tabs, and line breaks to give you a clean slate.
  Whether you're prepping text for APIs, cleaning up user input, or just tired of seeing extra spaces everywhere, this tool has your back.
  Paste your text, and watch as it instantly removes all the clutter, leaving you with a neat, readable result.
  Perfect for developers, writers, and anyone who’s ever thought, “Why is my text so messy?” Spoiler: it won’t be anymore.`
  },
  stringCounter: {
    title: "String, Word, Character, Line & Sentence Counter",
    body: `A String Counter is like a digital tally counter for your text — instantly counting characters, words, lines, and sentences without breaking a sweat.
  Whether you're writing essays, analyzing data, or just trying to figure out how many words you’ve typed, this tool does the math for you.
  Paste your text, and watch as it instantly counts everything you need, giving you a clear breakdown of your input.
  Perfect for writers, developers, and anyone who’s ever thought, “How long is this really?” Spoiler: it’s shorter than you think.`
  },
};

export default seoDescriptions;