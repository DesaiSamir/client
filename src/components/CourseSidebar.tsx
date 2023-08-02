import React from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Course } from '../interfaces/CourseContent'; // Import the interfaces

interface CourseSidebarProps {
    courses: Course[];
    selectedChapter: Course;
    selectedSubChapter?: Course;
	onChapterSelect: (chapter: Course) => void;
    onSubChapterSelect: (subChapter: Course) => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ courses, selectedChapter, selectedSubChapter, onChapterSelect, onSubChapterSelect }) => {
    const [openChapters, setOpenChapters] = React.useState<number[]>([]);

    const handleChapterClick = (chapter: Course) => {
        if (chapter.subChapters) {
            if (openChapters.includes(chapter.id)) {
                setOpenChapters((prevOpen) => prevOpen.filter((id) => id !== chapter.id));
            } else {
                setOpenChapters((prevOpen) => [...prevOpen, chapter.id]);
            }
        }
        onChapterSelect(chapter);
    };

    const handleSubChapterClick = (subChapter: Course, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        onSubChapterSelect(subChapter);
    };
	

    React.useEffect(() => {
		const updateOpenChapters = (chapter: Course | null, openChapters: number[]): void => {
			while (chapter) {
				openChapters.push(chapter.id);
				chapter = courses.find((c) => c.subChapters?.includes(chapter as Course)) || null;
			}
		};
	
		const newOpenChapters: number[] = [];
		updateOpenChapters(selectedSubChapter || selectedChapter, newOpenChapters);
		setOpenChapters(newOpenChapters);
    }, [selectedChapter, selectedSubChapter, courses]);

    return (
        <List component="nav">
            {courses.map((course) => (
                <React.Fragment key={course.id}>
                    <ListItem
						button
                        onClick={() => handleChapterClick(course)}
                        style={{
                            background: selectedChapter.id === course.id ? '#f0f0f0' : 'none',
                        }}
                    >
                        <ListItemText primary={course.title} />
                        {course.subChapters ? (
                            openChapters.includes(course.id) ? (
                                <ListItemIcon>
                                    <ExpandLess />
                                </ListItemIcon>
                            ) : (
                                <ListItemIcon>
                                    <ExpandMore />
                                </ListItemIcon>
                            )
                        ) : null}
                    </ListItem>
                    {course.subChapters && (
                        <Collapse in={openChapters.includes(course.id)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {course.subChapters.map((subChapter) => (
                                    <ListItem
                                        key={subChapter.id}
                                        button
                                        onClick={(event) => handleSubChapterClick(subChapter, event)}
                                        style={{
                                            paddingLeft: '20px',
                                            borderLeft: selectedChapter.id === subChapter.id ? '2px solid #3f51b5' : 'none',
                                            background: selectedSubChapter?.id === subChapter.id ? '#f0f0f0' : 'none',
                                        }}
                                    >
                                        <ListItemText primary={subChapter.title} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
        </List>
    );
};

export default CourseSidebar;
