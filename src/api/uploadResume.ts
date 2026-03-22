import { UploadProps } from "antd";

export const uploadResume: UploadProps['customRequest'] = async ({ file, onSuccess, onError }) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    } catch (error) {
        onError?.(error as Error);
    }
    onSuccess?.({});
}