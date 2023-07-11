import { useEffect, useState } from 'react';
import { IUseGradeImageProps } from './types';

const useGradeImage = ({fileName}:IUseGradeImageProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`svg/grades/${fileName}`);
                setImage(response.default);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchImage();
    }, [fileName]);

    return {
        loading,
        error,
        image,
    }
}

export default useGradeImage;