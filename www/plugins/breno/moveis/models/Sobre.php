<?php namespace Breno\Moveis\Models;

use Model;

/**
 * Sobre Model
 */
class Sobre extends Model
{

    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'breno_moveis_sobres';

    public $implement = ['System.Behaviors.SettingsModel'];

    // A unique code
    public $settingsCode = 'breno_moveis_sobre';

    // Reference to field configuration
    public $settingsFields = 'fields.yaml';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [
        'logo' => ['System\Models\File']
    ];
    
    public $attachMany = [];

    public $rules = [
        'sobre'        => 'required',
        'telefone'        => 'required|max:20',
        'cidade'  => 'required|max:255',
        'endereco' => 'required|max:255',
        'email'   => 'required|email|max:255',
        'facebook' => 'url|max:255',
        'twitter' => 'url|max:255',
        'instagram' => 'url|max:255'
    ];

}
