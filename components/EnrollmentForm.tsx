"use client";
import React, { useState } from 'react';
import { ChildInfo, Grade } from '../types';
import { db, IDUtil } from '../lib/appwrite';

const EnrollmentForm: React.FC = () => {
  const [step, setStep] = useState(1); // 1: Parent Info, 2: Children Info
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
        children: JSON.stringify(children),
        status: 'pending'
      } as any;
      await db.createDocument('yosr_db', 'enrollments', IDUtil.unique(), payload);
      setIsSuccess(true);
    } catch (err) {
      console.error('Enrollment submit error:', err);
      alert('تعذر إرسال الطلب. أرجو مراجعة إعدادات Appwrite (أذونات قاعدة البيانات).');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-10 text-center shadow-xl border-t-8 border-brand-600 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">يعطيك الصحة!</h3>
          <p className="text-slate-600 mb-8">وصلتنا المعلومات الكل. الفريق متاعنا باش يكلمك في أقرب وقت باش نأكدوا التسجيل.</p>
          <button 
            onClick={() => {setIsSuccess(false); setStep(1);}} 
            className="text-brand-700 font-bold hover:underline"
          >
            رجوع
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-brand-900 p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">استمارة التسجيل</h2>
          <p className="text-brand-200 text-sm">عمر المعلومات وإحنا نتكفلوا بالباقي</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          {/* Parent Information Section */}
          <div className="mb-10">
            <h3 className="text-lg font-black text-brand-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm">1</span>
              معلومات الولي
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">الإسم واللقب</label>
                <input 
                  required 
                  type="text" 
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="محمد بن صالح"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">رقم الهاتف</label>
                <input 
                  required 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98 000 000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-nums text-left"
                  dir="ltr"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100 my-8"></div>

          {/* Children Information Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-brand-900 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm">2</span>
                معلومات التلامذة
              </h3>
              <button type="button" onClick={addChild} className="text-sm font-bold text-brand-600 hover:bg-brand-50 px-3 py-1 rounded-lg transition-colors">
                + زيد تلميذ آخر
              </button>
            </div>

            <div className="space-y-6">
              {children.map((child, index) => (
                <div key={child.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative animate-fade-in">
                  {children.length > 1 && (
                    <button type="button" onClick={() => removeChild(child.id)} className="absolute top-4 left-4 text-slate-400 hover:text-red-500 transition-colors">
                      ✕
                    </button>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500">إسم التلميذ {index + 1}</label>
                      <input 
                        required 
                        type="text" 
                        value={child.name}
                        onChange={(e) => updateChild(child.id, 'name', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500">المستوى</label>
                      <select 
                        value={child.grade}
                        onChange={(e) => updateChild(child.id, 'grade', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 outline-none bg-white"
                      >
                        {Object.values(Grade).map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500">شنوة يحب يقرأ؟</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'french', label: '🇫🇷 فرنسية' },
                        { id: 'english', label: '🇬🇧 إنجليزية' },
                        { id: 'both', label: '⭐ الزوز (Pack)' }
                      ].map((opt) => (
                        <label key={opt.id} className={`
                          flex-1 min-w-[100px] cursor-pointer text-center py-2 rounded-lg border text-sm font-bold transition-all
                          ${child.subject === opt.id 
                            ? 'bg-brand-600 text-white border-brand-600 shadow-md' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300'}
                        `}>
                          <input 
                            type="radio" 
                            name={`subject-${child.id}`} 
                            className="hidden" 
                            checked={child.subject === opt.id}
                            onChange={() => updateChild(child.id, 'subject', opt.id as any)}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full mt-10 bg-brand-700 hover:bg-brand-800 text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-brand-700/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'جاري التسجيل...' : 'تأكيد التسجيل'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;