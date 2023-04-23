import React, { forwardRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TextEditor({content} , ref) {

  return (
    <>
      <Editor
        apiKey='qafoa71cruk7by75rtqkrwlh634aos9shty41j9ltsnye2l2'
        onInit={(evt, editor) => ref.current = editor}
        initialValue={content}
        init={{
          height: 500,
          width: '90%',
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
};

export default forwardRef(TextEditor);