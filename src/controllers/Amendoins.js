const db = require('../dataBase/connection'); 

module.exports = {
    async listarAmendoins(request, response) {
        try {

          
            const sql = `
            SELECT amen_id, amen_variedade, amen_tamanho, 
            amen_outras_caracteristicas FROM AMENDOINS;
         `;

         const [rows] = await db.query(sql);

         const nRegistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Amendoins', 
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
    async cadastrarAmendoins(request, response) {
        try {

            const { amen_variedade, amen_tamanho, amen_outras_caracteristicas } = request.body;
            
            // Instrução SQL
            const sql = `
              INSERT INTO AMENDOINS (amen_variedade, 
              amen_tamanho, 
              amen_outras_caracteristicas) 
              VALUES
                        (?, ?, ?)
                    `;

                    const values = [amen_variedade, amen_tamanho, amen_outras_caracteristicas];

                    const [result] = await db.query(sql, values);

                    const dados = {
                        inf_id: result.insertId,
                        amen_variedade, 
                        amen_tamanho,
                         amen_outras_caracteristicas
                    };



            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Amendoins', 
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
    async editarAmendoins(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de Amendoins', 
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
    async apagarAmendoins(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Amendoins', 
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