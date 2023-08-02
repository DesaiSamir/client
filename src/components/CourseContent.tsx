import React, { useEffect, useState } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Course } from '../interfaces/CourseContent';

interface CourseContentProps {
    selectedChapter: Course;
	selectedSubChapter: Course | undefined;
    onNextChapterClick: () => void;
}

const CourseContent: React.FC<CourseContentProps> = ({ selectedChapter, selectedSubChapter, onNextChapterClick }) => {
    const [courses, setCourses] = useState<Course>(selectedChapter);

	useEffect(() => {
		if(selectedChapter && !selectedSubChapter){
			setCourses(selectedChapter);
		} else if(selectedSubChapter){
			setCourses(selectedSubChapter);
		}
	}, [selectedChapter, selectedSubChapter])

    // Extract YouTube video ID from the YouTube URL
    const getYouTubeVideoId = (url: string): string => {
        const videoIdRegex = /(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        const match = url.match(videoIdRegex);
        return match && match[1] ? match[1] : '';
    };
	
    return (
        <Paper elevation={3} style={{ padding: '16px', height: 'calc(100vh - 108px)', display: 'flex', flexDirection: 'column'}}>       
            <div style={{ display: 'flex' }}>
                <Typography variant="h4" gutterBottom>
                    {courses.title}
                </Typography>
            </div>
            <div style={{ flexGrow: 1, overflowY: 'auto' }}>
                {courses.content && courses.content.map((contentItem) => (
                    <React.Fragment key={contentItem.title}>
                        <Typography variant="h5" gutterBottom>
                            {contentItem.title}
                        </Typography>
                        {contentItem.image && (
                            <img src={contentItem.image} alt={contentItem.title} style={{ maxWidth: '100%' }} />
                        )}
                        {contentItem.video && (
                            <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', overflow: 'hidden' }}>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(contentItem.video)}`}
                                    title={contentItem.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                        {contentItem.subTitle && (
                            <Typography variant="h6" gutterBottom>
                                {contentItem.subTitle}
                            </Typography>
                        )}
                        {contentItem.description && (
                            <Typography variant="body1" gutterBottom>
                                {contentItem.description.split('\n').map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph.trim()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </Typography>
                        )}
                        {contentItem.childTitles && contentItem.childTitles.map((childItem) => (
                            <React.Fragment key={childItem.title}>
                                <Typography variant="h5" gutterBottom>
                                    {childItem.title}
                                </Typography>
                                {childItem.content && (
                                    <Typography variant="body1">
                                        {childItem.content}
                                    </Typography>
                                )}
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px'}}>
                <Button variant="contained" endIcon={<ArrowForward />} onClick={onNextChapterClick}>
                    CONTINUE
                </Button>
            </div>
        </Paper>
    );
};

export default CourseContent;
