import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-base',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-base.component.html',
    styleUrl: './form-base.component.css'
})
export class FormBaseComponent implements OnInit {

    @Input() fields!: {
        campos: any[]
    }

    private readonly fb = inject(FormBuilder);

    protected form: FormGroup = this.fb.group({});

    ngOnInit(): void {
        this.crearFormulario();
    }

    private crearFormulario(): void {
        this.fields.campos.forEach((campo: any) => {
            if (campo.tipo === 'array') {
                const formArray = this.fb.array([]);
                this.form.addControl(campo.nombre, formArray);
            } else {
                this.form.addControl(campo.nombre, new FormControl('', campo.requerido ? [Validators.required] : []));
            }
        });
    }

    getFormArray(nombre: string): FormArray {
        return this.form.get(nombre) as FormArray;
    }


    agregarCampoArray(nombre: string): void {
        const formArray = this.form.get(nombre) as FormArray;
        const grupo = this.fb.group({});
        this.fields.campos.find((campo: any) => campo.nombre === nombre).campos.forEach((subCampo: any) => {
            grupo.addControl(subCampo.nombre, new FormControl('', subCampo.requerido ? [Validators.required] : []));
        });
        formArray.push(grupo);
    }

    onSubmit(): void {
        console.log(this.form.value);
    }

}
