const db = require('../dataBase/connection'); 

module.exports = {
    async listarAgricultores(request, response) {
        try {

                const sql = `
                   SELECT
                    agri_id, agri_localizacao_propriedade, 
                    agri_tipos_amendoim_cultivados, 
                    agri_certificacoes, agri_outras_informacoes
                  FROM AGRICULTORES;
                `;

                const [rows] = await db.query(sql);

                const nRegistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Agricultores', 
                nRegistros,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarAgricultores(request, response) {
        try {

            const { agri_localizacao_propriedade, agri_tipos_amendoim_cultivados, agri_certificacoes, agri_outras_informacoes } = request.body;
            
            // Instrução SQL
            const sql = `
               INSERT INTO AGRICULTORES (agri_localizacao_propriedade, 
               agri_tipos_amendoim_cultivados, 
               agri_certificacoes, agri_outras_informacoes)
                VALUES
                        (?, ?, ?, ?)
                    `;

                    const values = [agri_localizacao_propriedade, agri_tipos_amendoim_cultivados, agri_certificacoes, agri_outras_informacoes];

                    const [result] = await db.query(sql, values);

                    const dados = {
                        inf_id: result.insertId,
                        agri_localizacao_propriedade, 
                        agri_tipos_amendoim_cultivados, 
                        agri_certificacoes, 
                        agri_outras_informacoes
                    };


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Agricultores', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarAgricultores(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de Agricultores', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarAgricultores(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Agricultores', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  