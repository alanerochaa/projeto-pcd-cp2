'use client';

import { useState } from 'react';

const initialUserData = {
  nome: 'Maria Silva',
  email: 'maria@email.com',
  telefone: '(11) 91234-5678',
  cpf: '123.456.789-00',
  dataNascimento: '1990-01-01',
  genero: 'feminino',
  preferenciaContato: 'email'
};

export default function UpdateProfilePage() {
  const [userData, setUserData] = useState(initialUserData);
  const [editing, setEditing] = useState(false);
  const [formValues, setFormValues] = useState(initialUserData);

  const handleEditClick = () => {
    setFormValues(userData);
    setEditing(true);
  };

  const handleSave = () => {
    setUserData(formValues);
    setEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-[#FCE8E1] p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#F28C6A] mb-10">
        Meus Dados
      </h1>

      <div className="bg-white rounded-2xl shadow-md border border-[#F28C6A]/30 max-w-xl mx-auto p-6">
        {!editing ? (
          <>
            <p className="mb-2"><strong className="text-[#2AA597]">Nome:</strong> {userData.nome}</p>
            <p className="mb-2"><strong className="text-[#2AA597]">Email:</strong> {userData.email}</p>
            <p className="mb-2"><strong className="text-[#2AA597]">Telefone:</strong> {userData.telefone}</p>
            <p className="mb-2"><strong className="text-[#2AA597]">CPF:</strong> {userData.cpf}</p>
            <p className="mb-2"><strong className="text-[#2AA597]">Data de Nascimento:</strong> {userData.dataNascimento}</p>
            <p className="mb-2"><strong className="text-[#2AA597]">Gênero:</strong> {userData.genero}</p>
            <p className="mb-2"><strong className="text-[#2AA597]">Preferência de Contato:</strong> {userData.preferenciaContato}</p>
        

            <button
              onClick={handleEditClick}
              className="bg-[#F28C6A] hover:bg-[#E67C3C] text-white py-2 px-4 rounded"
            >
              Editar
            </button>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formValues.nome}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Telefone</label>
                <input
                  type="text"
                  name="telefone"
                  value={formValues.telefone}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  value={formValues.cpf}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Data de Nascimento</label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formValues.dataNascimento}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Gênero</label>
                <select
                  name="genero"
                  value={formValues.genero}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                >
                  <option value="">Selecione</option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Preferência de Contato</label>
                <div className="flex gap-4 mt-1">
                  <label>
                    <input
                      type="radio"
                      name="preferenciaContato"
                      value="telefone"
                      checked={formValues.preferenciaContato === 'telefone'}
                      onChange={handleChange}
                    />
                    <span className="ml-1">Telefone</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="preferenciaContato"
                      value="email"
                      checked={formValues.preferenciaContato === 'email'}
                      onChange={handleChange}
                    />
                    <span className="ml-1">Email</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-[#2AA597] text-sm font-bold">Sobre você</label>
                <textarea
                  name="bio"
                  value={formValues.bio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-1.5 border border-[#6BA6BA] rounded text-sm"
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full py-2 bg-[#6BA6BA] text-white rounded font-semibold hover:bg-[#5A8A9A] mt-4"
              >
                Salvar Alterações
              </button>
              <button
                onClick={() => setEditing(false)}
                className="w-full py-2 bg-[#F28C6A] text-white rounded font-semibold hover:bg-[#E67C3C] mt-2"
              >
                Cancelar
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
