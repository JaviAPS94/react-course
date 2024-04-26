import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(async (arg) => {
        setLoading(true);
        try {
            await dispatch(thunk(arg));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [dispatch, thunk]);

    return [ execute, loading, error ];
}