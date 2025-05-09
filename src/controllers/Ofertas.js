const db = require('../dataBase/connection'); 

module.exports = {
    async listarOfertas(request, response) {
        try {

         
            const sql = `
           SELECT oferta_id, agri_id, amen_id, oferta_quantidade, 
           oferta_preco, oferta_data_colheita, oferta_outras_informacoes, 
           oferta_data_publicacao, oferta_ativa FROM OFERTAS;
         `;

         const [rows] = await db.query(sql);

         const nRegistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Ofertas', 
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
    async cadastrarOfertas(request, response) {
        try {

        
            const { agri_id, amen_id, oferta_quantidade, oferta_preco, oferta_data_colheita, oferta_outras_informacoes, oferta_data_publicacao, oferta_ativa } = request.body;
            
            // Instrução SQL
            const sql = `
             INSERT INTO OFERTAS (agri_id, amen_id, 
             oferta_quantidade, oferta_preco, oferta_data_colheita, 
             oferta_outras_informacoes, oferta_data_publicacao, oferta_ativa) 
             VALUES
                        (?, ?, ?, ?, ?, ?, ?, ?)
                    `;

                    const values = [agri_id, amen_id, oferta_quantidade, oferta_preco, oferta_data_colheita, oferta_outras_informacoes, oferta_data_publicacao, oferta_ativa];

                    const [result] = await db.query(sql, values);

                    const dados = {
                    inf_id: result.insertId,
                    agri_id,
                    amen_id,
                    oferta_quantidade, 
                    oferta_preco, 
                    oferta_data_colheita,
                    oferta_outras_informacoes, 
                    oferta_data_publicacao, 
                    oferta_ativa
                    };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Ofertas', 
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
    async editarOfertas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de Ofertas', 
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
    async apagarOfertas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Ofertas', 
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