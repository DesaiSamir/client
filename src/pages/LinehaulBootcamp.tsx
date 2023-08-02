import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import CourseSidebar from '../components/CourseSidebar'; // Correct import path for CourseSidebar
import CourseContent from '../components/CourseContent'; // Correct import path for CourseContent
import { Course } from '../interfaces/CourseContent'; // Import the interfaces
import sampleData from '../data/sampleData'; // Import the sample data

const LinehaulBootcamp: React.FC = () => {
    // Sample data for the list of courses and sub-chapters
    const [courses, setCourses] = useState<Course[]>(sampleData); // Initialize with sample data

	const [selectedChapter, setSelectedChapter] = useState<Course>(courses[0]);
	const [selectedSubChapter, setSelectedSubChapter] = useState<Course | undefined>(undefined);

	useEffect(() => {
		setCourses(sampleData);
	}, [])
	
    const handleChapterSelect = (chapter: Course) => {
        setSelectedChapter(chapter);
        setSelectedSubChapter(undefined);
    };

    const handleSubChapterSelect = (subChapter: Course) => {
        setSelectedSubChapter(subChapter);
    };

    const handleNextChapterClick = () => {
		if (selectedChapter?.subChapters && selectedChapter.subChapters.length > 0) {
			// If the current chapter has sub-chapters, move to the first sub-chapter
			const currentSubChapterIndex = selectedChapter.subChapters.findIndex(
				(subChapter) => subChapter.id === selectedSubChapter?.id
			);
	
			if (currentSubChapterIndex !== undefined && currentSubChapterIndex + 1 < selectedChapter.subChapters.length) {
				// If there is a next sub-chapter in the current chapter, move to the next sub-chapter
				setSelectedSubChapter(selectedChapter.subChapters[currentSubChapterIndex + 1]);
			} else {
				// If the current sub-chapter is the last one, move to the next chapter
				const currentChapterIndex = courses.findIndex((course) => course.id === selectedChapter?.id);
	
				if (currentChapterIndex !== -1 && currentChapterIndex + 1 < courses.length) {
					setSelectedChapter(courses[currentChapterIndex + 1]);
					setSelectedSubChapter(undefined);
				}
			}
		} else {
			// If the current chapter doesn't have sub-chapters, find its index in the courses array
			const currentChapterIndex = courses.findIndex((course) => course.id === selectedChapter?.id);
	
			if (currentChapterIndex !== -1 && currentChapterIndex + 1 < courses.length) {
				// If there is a next chapter in the courses array, move to the next chapter
				setSelectedChapter(courses[currentChapterIndex + 1]);
			}
		}
	};
	

    return (
        <Container maxWidth="lg" style={{ overflow: 'hidden' }}>
			<Paper elevation={3} style={{ height: 'calc(100vh - 45px)' }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={3}>
						<CourseSidebar
							courses={courses}
							selectedChapter={selectedChapter}
							selectedSubChapter={selectedSubChapter}
							onChapterSelect={handleChapterSelect}
							onSubChapterSelect={handleSubChapterSelect}
						/>
					</Grid>
					<Grid item xs={12} md={9} style={{ paddingLeft: '0'}}>
						{
							selectedChapter 
							? 
								<CourseContent 
									selectedChapter={selectedChapter} 
									selectedSubChapter={selectedSubChapter}
									onNextChapterClick={handleNextChapterClick} 
								/> 
							: 
								null
						}
					</Grid>
				</Grid>
			</Paper>
        </Container>
    );
};

export default LinehaulBootcamp;
