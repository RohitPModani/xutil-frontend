import { useEffect, useState } from 'react';
import BackToHome from '../../components/BackToHome';
import ErrorBox from '../../components/ErrorBox';
import LoadingButton from '../../components/LoadingButton';
import SectionCard from '../../components/SectionCard';
import api from '../../services/api';
import CopyButton from '../../components/CopyButton';
import AutoTextarea from '../../hooks/useAutoSizeTextArea';
import ClearButton from '../../components/ClearButton';
import SEODescription from '../../components/SEODescription';
import BuyMeCoffee from '../../components/BuyMeCoffee';
import seoDescriptions from '../../data/seoDescriptions';
import { PageSEO } from '../../components/PageSEO';
import { updateToolUsage } from '../../utils/toolUsage';

interface HashResponse {
  text: string;
  algorithm: string;
  hashed_text: string;
}

function HashGenerator() {
  const seo = seoDescriptions.hashGenerator;
  const [inputText, setInputText] = useState('');
  const [algorithm, setAlgorithm] = useState('sha256');
  const [hashResult, setHashResult] = useState<HashResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateToolUsage('hash');
  }, []);

  const fetchHash = async () => {
    if (!inputText.trim()) {
      setError('Input text cannot be empty');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post<HashResponse>('/hash/generate', {
        text: inputText,
        algorithm,
      });
      setHashResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearAll = () => {
    setHashResult(null);
    setInputText('');
    setAlgorithm('sha256');
  }

  return (
    <>
      <PageSEO title={seo.title} description={seo.body} />
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8 section">
        <div className="flex flex-row items-center justify-start justify-between gap-3 mb-4">
          <BackToHome />
          <BuyMeCoffee variant="inline" />
        </div>
        <h2 className="text-2xl font-bold mb-6">{seo.title}</h2>
        <SEODescription title={'a ' + seo.title}>{seo.body}</SEODescription>

        <SectionCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Generate Cryptographic Hash</h3>
            <ClearButton onClick={handleClearAll} disabled={inputText === ''} />
          </div>
          <div className="space-y-4 mb-4">
            <div>
              <label className="form-label">Input Text:</label>
              <AutoTextarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="input-field"
                disabled={isLoading}
                placeholder="Enter text to hash"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="form-label">Algorithm:</label>
                <select
                  value={algorithm}
                  onChange={(e) => setAlgorithm(e.target.value)}
                  className="input-field w-full h-10"
                  disabled={isLoading}
                >
                  <option value="md5">MD5</option>
                  <option value="sha1">SHA1</option>
                  <option value="sha256">SHA256</option>
                  <option value="sha512">SHA512</option>
                </select>
              </div>
              <div className="w-full sm:w-1/2 flex sm:items-end">
                <LoadingButton onClick={fetchHash} isLoading={isLoading} className="w-full">
                  Generate
                </LoadingButton>
              </div>
            </div>
          </div>

          {hashResult && (
            <div className="result-box">
              <label className="form-label">Result</label>
              <div className="inner-result">
                <div className="w-full mono-output">{hashResult.hashed_text}</div>
                <CopyButton text={hashResult.hashed_text} />
              </div>
              <p className="text-sm mt-2">
                Algorithm: {hashResult.algorithm.toUpperCase()}
              </p>
            </div>
          )}

          <ErrorBox message={error} />
        </SectionCard>
      </div>
    </>
  );
}

export default HashGenerator;