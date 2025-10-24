# South Asian Canadian Muslims in British Columbia Exhibit

A comprehensive digital exhibit documenting the rich history, cultural heritage, and significant contributions of South Asian Canadian Muslim communities in British Columbia from the early 1900s to the present day.

## About the Project

The **South Asian Canadian Muslims in British Columbia (SACMBC)** project is an online exhibit developed between 2024 and 2025 as part of the [South Asian Canadian Digital Archive (SACDA)](https://sacda.ca). This foundational project aims to create a comprehensive understanding of South Asian Canadian Muslim communities in BC while serving as a starting point for broader engagement with diverse Muslim experiences across Canada.

### Project Goals

- **Document untold histories**: Preserve and share the often obscured stories of South Asian Canadian Muslim communities in BC
- **Oral history collection**: Record first-hand experiences and narratives from community members across generations
- **Educational outreach**: Foster cultural understanding and celebrate the diverse heritage and contributions of South Asian Canadian Muslims
- **Community engagement**: Build strong partnerships with organizations and individuals to ensure inclusive and representative research

### Historical Coverage

The exhibit covers three major migration periods:

1. **Early Migration (1900s-1962)**: The earliest South Asian Canadian Muslim presence in BC, including figures from the Komagata Maru incident
2. **Mid-20th Century Migration (1962-2001)**: Post-Immigration Act communities from Pakistan, Bangladesh, East Africa, Fiji, and the Caribbean
3. **Recent Experiences (2001-Present)**: Contemporary Muslim experiences, including post-9/11 challenges and community resilience

### Key Features

- **Interactive Timeline**: Navigate through significant events affecting Muslims in BC
- **Oral Histories**: Video interviews and personal narratives from community members
- **Historical Documentation**: Archival research and case studies of notable figures
- **Cultural Diversity**: Recognition of various Islamic sects (Sunni, Shia, Ismaili, Ahmadiyya) and regional backgrounds
- **Migration Stories**: Documentation of "double diaspora" experiences and transnational identities

## Technologies Used

### Frontend Framework
- **SvelteKit**: Modern web framework with TypeScript support for building the interactive exhibit
- **Svelte 5**: Latest version providing reactive UI components and state management

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Tailwind Animate**: Animation utilities for enhanced user experience
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility

### UI Components & Libraries
- **ShadCN/UI Components**: 
  - `bits-ui`: Accessible UI primitives
  - `@lucide/svelte`: Icon components
  - `embla-carousel-svelte`: Photo carousel functionality for interviews
- **Lucide Icons**: Modern icon library for consistent visual elements

### Animations & Interactions
- **GSAP (GreenSock)**: Professional-grade animations for timeline and interactive elements
- **Tailwind Variants**: Dynamic styling based on component states

### Content Management
- **TypeScript**: Type-safe content management for interviews, case studies, and historical data
- **Structured Data**: Organized content architecture for interviews, timelines, and resources

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint & Prettier**: Code quality and formatting
- **TypeScript**: Type safety and enhanced developer experience

### Deployment & Hosting
- **Vercel**: Production deployment and hosting
- **Static Site Generation**: Optimized for performance and SEO

## Project Structure

```
src/
├── lib/
│   ├── components/        # Reusable UI components
│   ├── content/          # Structured content data
│   │   ├── interviews.content.ts    # Oral history data
│   │   ├── case-studies.ts         # Historical case studies
│   │   ├── resources.content.ts    # Academic and community resources
|   |   ├── about.content.ts        # About page data
│   │   └── nav.ts                  # Navigation structure
│   ├── pages/            # Page-specific components
│   └── utils/            # Utility functions
├── routes/
│   ├── about/            # Project information
│   ├── history/          # Historical timeline and migration periods
│   ├── oral-histories/   # Interview collection
│   ├── further-reading/  # Academic resources
│   └── contact/          # Contact information
└── static/
    ├── timeline/           # Historical Timeline images and media
    └── content/          # Media assets and documents

```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd muslims-in-bc-exhibit
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run TypeScript checks

## Contributing

This project welcomes community feedback and contributions. To get involved:

1. **Share your story**: Contact us if you have experiences or family histories to share
2. **Provide feedback**: Help us improve the project by sharing suggestions
3. **Academic collaboration**: Researchers and students are welcome to contribute

## Contact

- **Email**: [sasi@ufv.ca](mailto:sasi@ufv.ca)
- **Phone**: [604-854-4547](tel:+6048544547)
- **Website**: [South Asian Studies Institute](https://ufv.ca/sasi)

## Acknowledgments

### Research Team
- **Dr. Anushay Malik** (Senior Lecturer, SFU) - Lead Research Consultant
- **Dr. Satwinder Bains** (Director, South Asian Studies Institute)
- **Kiara Dabreo** - Historical and Archival Research
- **Samarah Siddique** - Research and Cataloguing Assistant
- **Sadhik Preet Singh** - Video Editor and Transcriber

### Development Team
- **Arnav Mehta** - Web Development and Platform Hosting
- **Rashneet** - Graphic Design and Visual Identity
- **Saumyaa Gelani** - Web Design and User Experience

### Community Partners
Special thanks to all community members, organizations, and associations who shared their stories and contributed to this project.

## License

This project is part of the South Asian Studies Institute at the University of the Fraser Valley. All content is used with permission and appropriate attribution.
