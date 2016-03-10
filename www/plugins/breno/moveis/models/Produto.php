<?php namespace Breno\Moveis\Models;

use Model;

/**
 * Produto Model
 */
class Produto extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'breno_moveis_produtos';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    public $jsonable = ['medidas'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    
    public $belongsTo = [
        'categoria' => ['Breno\Moveis\Models\Categoria']
    ];

    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [
        'images' => ['System\Models\File']
    ];

    public function scopeCategorias($query, $id) 
    {
        $sql = ' categoria_id IN( ';
        $sql .= ' SELECT result.id FROM ( '
                .'(SELECT '.$id.' as id) UNION (SELECT bean.id as id FROM ( '
                .'SELECT c.id as id, c.nome as nome, @pv:=c.id as parent FROM breno_moveis_categorias as c '
                    .' JOIN (SELECT @pv:=?)tmp '
                    .' WHERE c.categoria_id = @pv ' 
                .' ) as bean) '
            .' ) as result';
        
        $sql .= ' )';

        return $query->whereRaw($sql, [$id]);
    }

}