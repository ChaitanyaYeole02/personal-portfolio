# Data Folder Structure

This folder contains all the data for your personal portfolio, organized into logical, maintainable files.

## 📁 File Organization

### `index.js`

- **Purpose**: Main export file that re-exports all data
- **Usage**: Import from `@/data` (recommended) or `@/data/[specific-file]` for direct imports

### `navigation.js`

- **Contains**: Navigation links and menu structure
- **Exports**: `links` array

### `experience.js`

- **Contains**: Work experience and education data
- **Exports**: `experiencesData`, `educationData`
- **Dependencies**: React icons (CgWorkAlt, LuGraduationCap)

### `projects.js`

- **Contains**: Project information, descriptions, tags, and images
- **Exports**: `projectsData`
- **Dependencies**: Project images from `public/` folder

### `publications.js`

- **Contains**: Research publications and academic work
- **Exports**: `publicationsData`
- **Dependencies**: Publication images from `public/` folder

### `skills.js`

- **Contains**: Technical skills and technologies
- **Exports**: `skillsData` array

### `awards.js`

- **Contains**: Awards, achievements, and recognitions
- **Exports**: `awardsData` array

## 🚀 Benefits of This Structure

1. **Maintainability**: Each data type is in its own file
2. **Scalability**: Easy to add new sections or modify existing ones
3. **Organization**: Clear separation of concerns
4. **Clean Architecture**: Single source of truth for all data
5. **Team Collaboration**: Multiple developers can work on different data files
6. **Version Control**: Better diff tracking and conflict resolution

## 📝 Usage Examples

### Old Way (No Longer Available)

```javascript
import { projectsData } from "@/lib/Data"; // ❌ This path no longer exists
```

### New Way (Recommended)

```javascript
import { projectsData } from "@/data";
// or
import { projectsData } from "@/data/projects";
```

## 🔧 Adding New Data

1. **Create a new file** in the `src/data/` folder
2. **Export your data** from the new file
3. **Add to index.js** to make it available through the main export
4. **Update index.js** to make it available through the main export

## 🎯 Best Practices

- Keep each file focused on one data type
- Use descriptive file names
- Maintain consistent export patterns
- Add JSDoc comments for complex data structures
- Keep image imports at the top of relevant files
