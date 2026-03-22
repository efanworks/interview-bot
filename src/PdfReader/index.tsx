import { useState, type MouseEvent } from 'react';
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, type UploadProps } from 'antd';
import {uploadResume} from '../api/uploadResume';
import s from './style.module.scss';

type PdfReaderProps = {
    onFileSelect?: (file: File) => void;
};

export default function PdfReader({ onFileSelect }: PdfReaderProps) {
    const [loading, setLoading] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');

    const beforeUpload: UploadProps['beforeUpload'] = (file) => {
        const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
        if (!isPdf) {
            message.error('你只能上传 pdf 文件');
            setUploadedFileName('');
            return Upload.LIST_IGNORE;
        }
        const isLmt8M = file.size / 1024 / 1024 < 8;
        if (!isLmt8M) {
            message.error('文件大小必须小于8M');
            setUploadedFileName('');
            return Upload.LIST_IGNORE;
        }

        return true;
    };

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            setLoading(false);
            setUploadedFileName(info.file.name);
            if (info.file.originFileObj) {
                onFileSelect?.(info.file.originFileObj as File);
            }
            return;
        }

        if (info.file.status === 'error' || info.file.status === 'removed') {
            setLoading(false);
            if (info.file.status === 'removed') {
                setUploadedFileName('');
            }
        }
    };

    const handleDelete = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setLoading(false);
        setUploadedFileName('');
    }

    return (
        <div className={s.pdfReader}>
            <Upload
                name="resume"
                customRequest={uploadResume}
                listType="picture-card"
                className={s.resumeUpload}
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                <button type="button" className={s.button}>
                    {loading ? (
                        <>
                            <LoadingOutlined />
                            <div className={s.text}>Uploading...</div>
                        </>
                    ) : uploadedFileName ? (
                        <>
                            <div className={s.text}>{uploadedFileName}</div>
                            <span
                                className={s.deleteButton}
                                onClick={handleDelete}
                            >
                                <DeleteOutlined />
                            </span>
                        </>
                    ) : (
                        <>
                            <PlusOutlined />
                            <div className={s.text}>Upload</div>
                        </>
                    )}
                </button>
            </Upload>
        </div>
    );
}