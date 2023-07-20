import React, { useState, useRef } from 'react'
import dayjs from 'dayjs';
import { Box, Typography, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

import { Editor } from '@tinymce/tinymce-react'

import styles from './Articles.module.css'

const Informations = () => {
    const dateDuJour = new Date().toLocaleDateString('en-EN')
    const [detailsArticle, setDetailsArticle] = useState({
        visible: false,
        date: '',
        title: '',
        author: '',
        chapeau: '',
        description: ''
    })
    const editorRef1 = useRef(null)
    const editorRef2 = useRef(null)

    const handleChangeDate = (date) => {
        setDetailsArticle(prevState => ({ ...prevState, date: date }));
    }

    const handleChangeVisibility = (event) => {
        const isVisible = event.target.value === "Yes";
        setDetailsArticle(prevState => ({ ...prevState, visible: isVisible }));
    }

    const handleChangeTitle = (event) => {
        setDetailsArticle(prevState => ({ ...prevState, title: event.target.value }));
    }
    const handleChangeAuthor = (event) => {
        setDetailsArticle(prevState => ({ ...prevState, author: event.target.value }));
    }

    const handleChangeChapeau = (content) => {
        setDetailsArticle(prevState => ({ ...prevState, chapeau: content }));
    }

    const handleChangeDescription = (content) => {
        setDetailsArticle(prevState => ({ ...prevState, description: content }));
    }

    const log = () => {
        console.log('Contenu de l\'artcile:', detailsArticle);

    }
    return (
        <Box >
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: '5px' }}>General parameter</Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', px: 4 }}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DateTimePicker']} sx={{ width: '20%' }} >
                            <DemoItem label="Date" >
                                <DatePicker defaultValue={dayjs(dateDuJour)} className={styles.basic} onChange={handleChangeDate} />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    <Box>
                        <FormLabel id="radio-visible" sx={{ mx: 4, fontSize: '0.875rem' }}>Visible</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="No"
                            onChange={handleChangeVisibility}
                        >
                            <FormControlLabel value="Yes" control={<Radio color="success" size="small" />} label={<span style={{ fontSize: '0.875rem' }}>Yes</span>} />
                            <FormControlLabel value="No" control={<Radio color="error" size="small" />} label={<span style={{ fontSize: '0.875rem' }}>No</span>} />
                        </RadioGroup>
                    </Box>
                </Box><br></br>

                <TextField sx={{ mb: 2 }} className={styles.basic} size="small" label="Title" variant="outlined" onChange={handleChangeTitle} />
                <TextField sx={{ mb: 4 }} className={styles.basic} size="small" label="Author" variant="outlined" onChange={handleChangeAuthor} />

                <FormLabel  >Chapeau :</FormLabel>
                <Editor
                    apiKey={process.env.REACT_APP_TINY_API_KEY}
                    onInit={(evt, editor) => {
                        editorRef1.current = editor;
                    }}
                    initialValue=""
                    init={{
                        height: 200,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'emoticons',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help | emoticons',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                    onEditorChange={handleChangeChapeau}
                /><br></br>
                <FormLabel  >Description :</FormLabel>
                <Editor
                    apiKey={process.env.REACT_APP_TINY_API_KEY}
                    onInit={(evt, editor) => {
                        editorRef2.current = editor;
                    }}
                    initialValue=""
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'emoticons',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help | emoticons',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={handleChangeDescription}
                />
                <button onClick={log}>Log editor content</button>

            </Box >

        </Box>
    )
}

export default Informations