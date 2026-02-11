
import React, { useState } from 'react';
import { ChildInfo, Grade, SubjectChoice } from '../types';

const EnrollmentForm: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [children, setChildren] = useState<ChildInfo[]>([
    { id: '1', name: '', grade: Grade.Primary, subject: 'french' }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addChild = () => {
    setChildren([
      ...children,
      { id: Math.random().toString(36).substr(2, 9), name: '', grade: Grade.Primary, subject: 'french' }
    ]);
  };

  const removeChild = (id: string) => {
    if (children.length > 1) {
      setChildren(children.filter(c => c.id !== id));
    }
  };

  const updateChild = (id: string, field: keyof ChildInfo, value: any) => {
    setChildren(children.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        parentName,
        phone,
        children: children.map(c => ({ name: c.name, grade: c.grade, subject: c.subject }))
      };

      const apiKey = import.meta.env.VITE_APPWRITE_API_KEY;
      if (!apiKey) {
        throw new Error('Server API key not configured. Please set VITE_APPWRITE_API_KEY in .env.local');
      }

      // Use REST API directly to write to the legacy DB collection
      const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
      const projectId = import.meta.env.VITE_APPWRITE_PROJECT;

      const response = await fetch(
        `${endpoint}/databases/legacy-db/collections/enrollments_col/documents`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Project': projectId,
            'X-Appwrite-Key': apiKey
          },
          body: JSON.stringify({
            documentId: 'unique()',
            data: {
              parentName: payload.parentName,
              phone: payload.phone,
              children: JSON.stringify(payload.children),
              status: 'pending',
              submittedAt: new Date().toISOString()
            }
          })
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Database error: ${response.status}`);
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      alert('خطأ أثناء إرسال المعلومات: ' + (err.message || err));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-6 text-center animate-fade-in">
        <div className="bg-[#6A0066] p-12 rounded-[3rem] shadow-2xl border-b-8 border-[#FF0066] text-white">
          <div className="w-20 h-20 bg-[#FF0066] text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl shadow-lg">✓</div>
          <h3 className="text-3xl font-black mb-4 leading-relaxed">يعطيك الصحة!</h3>
          <p className="text-xl font-bold text-white/70">المعلومات متاعك وصلتنا بنجاح. باش نكلموك في أقرب وقت.</p>
          <button onClick={() => setIsSuccess(false)} className="mt-8 text-[#FF0066] font-bold hover:underline">تسجيل صغير آخر</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="bg-[#FEEBF6] rounded-[4rem] shadow-2xl overflow-hidden border-4 border-[#6A0066]/10">
        <div className="bg-[#6A0066] p-10 text-white text-center">
          <h2 className="text-3xl font-black mb-3 leading-relaxed">سجل صغارك توة</h2>
          <p className="text-white/60 font-bold">عمر الفورم وإحنا نتكلفو بالباقي</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-10 space-y-10">
          {/* Parent Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-black text-[#6A0066]">إسم الولي</label>
              <input required type="text" value={parentName} onChange={e => setParentName(e.target.value)} placeholder="الإسم واللقب" className="w-full px-5 py-4 rounded-2xl border-2 border-[#6A0066]/10 focus:border-[#FF0066] outline-none transition-all font-bold text-[#6A0066] bg-white/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black text-[#6A0066]">رقم الهاتف</label>
              <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="مثلاً: 95 040 307" className="w-full px-5 py-4 rounded-2xl border-2 border-[#6A0066]/10 focus:border-[#FF0066] outline-none transition-all font-bold text-[#6A0066] bg-white/50 font-nums" dir="ltr" />
            </div>
          </div>

          {/* Children Info */}
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b-2 border-[#6A0066]/10 pb-4">
              <h3 className="font-black text-xl text-[#6A0066] italic leading-relaxed">معلومات التلامذة</h3>
              <button type="button" onClick={addChild} className="text-[#FF0066] hover:text-[#D40055] text-sm font-black transition-colors underline underline-offset-4">+ إضافة تلميذ</button>
            </div>
            
            {children.map((child, index) => (
              <div key={child.id} className="relative bg-[#6A0066]/5 p-8 rounded-[3rem] border-2 border-white group">
                {children.length > 1 && (
                  <button type="button" onClick={() => removeChild(child.id)} className="absolute -top-3 -left-3 bg-[#FF0066] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform">×</button>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#6A0066]/50">إسم التلميذ <span className="font-nums">{index + 1}</span></label>
                    <input required type="text" value={child.name} onChange={e => updateChild(child.id, 'name', e.target.value)} placeholder="إسم الصغير" className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:border-[#FF0066] outline-none font-bold text-[#6A0066] bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#6A0066]/50">المستوى الدراسي</label>
                    <select value={child.grade} onChange={e => updateChild(child.id, 'grade', e.target.value)} className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:border-[#FF0066] outline-none font-bold text-[#6A0066] bg-white">
                      {Object.values(Grade).map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['french', 'english', 'both'].map((sub) => (
                    <label key={sub} className="flex flex-1 min-w-[140px] items-center gap-3 cursor-pointer bg-white px-5 py-4 rounded-2xl border-2 border-transparent has-[:checked]:border-[#FF0066] has-[:checked]:bg-[#FF0066]/5 transition-all text-sm font-bold shadow-sm">
                      <input type="radio" name={`subject-${child.id}`} checked={child.subject === sub} onChange={() => updateChild(child.id, 'subject', sub as any)} className="accent-[#FF0066] w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="text-[#6A0066] text-base leading-relaxed">
                          {sub === 'french' ? 'فرنسية' : sub === 'english' ? 'إنجليزية' : 'اللغات الزوز'}
                        </span>
                        <span className="text-[#FF0066] text-xs font-black flex items-center gap-1" dir="ltr">
                          <span className="font-nums">{sub === 'both' ? '100' : '60'}</span>
                          <span>د.ت</span>
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-[#FF0066] text-white py-6 rounded-[2rem] font-black text-2xl shadow-xl hover:brightness-110 active:scale-95 transition-all disabled:opacity-50">
            {isSubmitting ? 'قاعدين نبعثوا...' : 'أبعث المعلومات توة'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
